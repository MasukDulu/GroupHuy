// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDJzGpor2RB1fSdEgyNdLO0FvY0sy1lui0",
  authDomain: "from-chat-13ca6.firebaseapp.com",
  databaseURL: "https://from-chat-13ca6-default-rtdb.firebaseio.com",
  projectId: "from-chat-13ca6",
  storageBucket: "from-chat-13ca6.firebasestorage.app",
  messagingSenderId: "1090875717764",
  appId: "1:1090875717764:web:52a4acd2d9fe3974b42ad1",
  measurementId: "G-2XT0J4E9L7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Make Firebase available globally
const database = firebase.database();

// Helper function to format timestamp
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
}

// Function to initialize default settings if they don't exist
function initializeDefaultSettings() {
    const settingsRef = firebase.database().ref('settings');
    
    settingsRef.once('value').then(snapshot => {
        if (!snapshot.exists()) {
            settingsRef.set({
                groupName: 'Group Chat',
                groupProfileUrl: '',
                chatStatus: 'open'
            });
        }
    });
}

// Call the initialization function
initializeDefaultSettings();