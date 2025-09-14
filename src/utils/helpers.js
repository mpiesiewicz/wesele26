// Utility functions can be added here as needed
export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('pl-PL', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  // Add more utility functions as needed