import { exportData, importData, clearStorage } from './localStorage.js';

export const downloadBackup = () => {
    const data = exportData();
    if (!data) return false;

    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `notes-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    return true;
};

export const uploadBackup = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                const success = importData(data);
                resolve(success);
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = () => reject(reader.error);
        reader.readAsText(file);
    });
};

export const resetAllData = () => {
    const confirm = window.confirm('Are you sure you want to delete all data? This cannot be undone.');
    if (confirm) {
        clearStorage();
        window.location.reload();
        return true;
    }
    return false;
};