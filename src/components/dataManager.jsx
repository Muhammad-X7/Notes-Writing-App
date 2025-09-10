// Import functions for localStorage operations
import { exportData, importData, clearStorage } from './localStorage.js';

/**
 * Download all stored notes as a JSON backup file
 * @returns {boolean} true if backup downloaded, false if no data
 */
export const downloadBackup = () => {
    const data = exportData(); // Get all stored data
    if (!data) return false;   // Exit if no data

    // Convert data to formatted JSON string
    const dataStr = JSON.stringify(data, null, 2);
    // Create a Blob object for the JSON file
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `notes-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click(); // Trigger download

    return true;
};

/**
 * Upload a backup JSON file and import the data
 * @param {File} file - JSON backup file
 * @returns {Promise<boolean>} resolves true if import successful
 */
export const uploadBackup = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader(); // Read file content
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result); // Parse JSON
                const success = importData(data);         // Import into storage
                resolve(success);
            } catch (error) {
                reject(error); // Reject if parsing/import fails
            }
        };
        reader.onerror = () => reject(reader.error); // Handle read errors
        reader.readAsText(file); // Read file as text
    });
};

/**
 * Delete all stored data after user confirmation
 * @returns {boolean} true if data cleared, false if cancelled
 */
export const resetAllData = () => {
    const confirmAction = window.confirm(
        'Are you sure you want to delete all data? This cannot be undone.'
    );
    if (confirmAction) {
        clearStorage();          // Clear localStorage
        window.location.reload(); // Reload page to reflect changes
        return true;
    }
    return false; // User cancelled
};
