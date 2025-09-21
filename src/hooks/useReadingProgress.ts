import { useState, useEffect, useCallback } from 'react';

interface ReadingProgressData {
  readPosts: string[];
  totalPostsWhenLastUpdated: number;
  lastUpdated: string;
}

const STORAGE_KEY = 'blog-reading-progress';

export const useReadingProgress = (totalPosts: number) => {
  const [readPosts, setReadPosts] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  // Load data from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const data: ReadingProgressData = JSON.parse(stored);
        setReadPosts(data.readPosts || []);
        
        // Check if new posts were added
        if (totalPosts > data.totalPostsWhenLastUpdated) {
          // Update the stored total count
          const updatedData = {
            ...data,
            totalPostsWhenLastUpdated: totalPosts,
            lastUpdated: new Date().toISOString()
          };
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
        }
      } catch (error) {
        console.error('Failed to parse reading progress data:', error);
      }
    }
  }, [totalPosts]);

  // Calculate progress when readPosts or totalPosts change
  useEffect(() => {
    if (totalPosts > 0) {
      const progressPercentage = (readPosts.length / totalPosts) * 100;
      setProgress(Math.round(progressPercentage));
    }
  }, [readPosts.length, totalPosts]);

  // Toggle read status for a post
  const togglePostRead = useCallback((postSlug: string) => {
    setReadPosts(current => {
      const isCurrentlyRead = current.includes(postSlug);
      const updated = isCurrentlyRead 
        ? current.filter(slug => slug !== postSlug)
        : [...current, postSlug];

      // Save to localStorage
      const data: ReadingProgressData = {
        readPosts: updated,
        totalPostsWhenLastUpdated: totalPosts,
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

      return updated;
    });
  }, [totalPosts]);

  // Check if a post is read
  const isPostRead = useCallback((postSlug: string) => {
    return readPosts.includes(postSlug);
  }, [readPosts]);

  // Reset all progress
  const resetProgress = useCallback(() => {
    setReadPosts([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  // Mark all as read
  const markAllAsRead = useCallback((allPostSlugs: string[]) => {
    setReadPosts(allPostSlugs);
    const data: ReadingProgressData = {
      readPosts: allPostSlugs,
      totalPostsWhenLastUpdated: totalPosts,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [totalPosts]);

  return {
    readPosts,
    progress,
    togglePostRead,
    isPostRead,
    resetProgress,
    markAllAsRead
  };
};