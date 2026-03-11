<!DOCTYPE html>
<html lang="en" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>InstaClone - Frontend</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="manifest" href="manifest.json">
    <style>
        :root {
            --background-light: #f9fafb;
            --text-light: #1f2937;
            --background-dark: #111827;
            --text-dark: #f9fafb;
            --primary-color: #8b5cf6;
        }
        body {
            font-family: 'Inter', sans-serif;
            transition: background-color 0.3s, color 0.3s;
        }
        .dark body {
            background-color: var(--background-dark);
            color: var(--text-dark);
        }
        .light body {
            background-color: var(--background-light);
            color: var(--text-light);
        }
        .glassmorphism {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .dark .glassmorphism {
            background: rgba(17, 24, 39, 0.7);
        }
        .neon-shadow {
            box-shadow: 0 0 5px var(--primary-color), 0 0 10px var(--primary-color), 0 0 20px var(--primary-color);
        }
        .heart-animation {
            animation: heart-beat 0.5s ease-in-out;
        }
        @keyframes heart-beat {
            0% { transform: scale(1); }
            50% { transform: scale(1.4); }
            100% { transform: scale(1); }
        }
        .story-item {
            transition: transform 0.2s;
        }
        .story-item:hover {
            transform: scale(1.05);
        }
        /* Scrollbar styles */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #1f2937;
        }
        ::-webkit-scrollbar-thumb {
            background: #4b5563;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #6b7280;
        }
    </style>
</head>
<body class="overflow-x-hidden">

    <!-- App Container -->
    <div id="app-container" class="min-h-screen">

        <!-- Login Screen -->
        <div id="login-screen" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-80 backdrop-blur-sm">
            <div class="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-2xl shadow-lg">
                <div class="text-center">
                    <h1 class="text-4xl font-bold text-white">InstaClone</h1>
                    <p class="text-gray-400">Enter a username to continue</p>
                </div>
                <input id="username-input" type="text" placeholder="Choose a username" class="w-full px-4 py-3 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                <button id="login-btn" class="w-full py-3 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">Enter</button>
                <button id="admin-login-toggle" class="w-full py-2 text-sm text-gray-400 hover:text-white">
                    <i class="fas fa-lock"></i> Admin Login
                </button>
            </div>
        </div>

        <!-- Admin Login Modal -->
        <div id="admin-login-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-80 backdrop-blur-sm">
            <div class="w-full max-w-sm p-8 space-y-6 bg-gray-800 rounded-2xl shadow-lg">
                 <div class="text-center">
                    <h2 class="text-2xl font-bold text-white">Admin Access</h2>
                </div>
                <input id="admin-password-input" type="password" placeholder="Enter Admin Password" class="w-full px-4 py-3 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                <button id="admin-login-btn" class="w-full py-3 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">Login</button>
                <button id="close-admin-modal-btn" class="w-full py-2 text-sm text-gray-400 hover:text-white">Cancel</button>
            </div>
        </div>

        <!-- Main Content (Hidden initially) -->
        <div id="main-content" class="hidden">
            <!-- Header -->
            <header class="fixed top-0 left-0 right-0 z-40 glassmorphism">
                <div class="container mx-auto px-4 py-3 flex justify-between items-center">
                    <h1 class="text-2xl font-bold">InstaClone</h1>
                    <div class="flex items-center space-x-4">
                        <input id="search-bar" type="text" placeholder="Search #tag or @user" class="hidden md:block w-48 px-3 py-1.5 text-sm bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500">
                        <button id="dark-mode-toggle" class="text-xl"><i class="fas fa-moon"></i></button>
                        <div id="admin-controls" class="hidden">
                             <button id="admin-dashboard-toggle" class="text-xl"><i class="fas fa-user-shield"></i></button>
                        </div>
                        <span id="current-user" class="font-semibold"></span>
                    </div>
                </div>
            </header>

            <main class="container mx-auto px-4 pt-24 pb-20 md:pt-20">
                <!-- Stories Bar -->
                <div class="mb-6">
                    <h2 class="text-lg font-semibold mb-2">Stories</h2>
                    <div id="stories-bar" class="flex space-x-4 overflow-x-auto pb-2">
                        <!-- Story items will be injected here -->
                    </div>
                </div>

                <!-- Posts Feed -->
                <div id="posts-feed" class="max-w-xl mx-auto space-y-8">
                    <!-- Posts will be injected here -->
                </div>
                 <div id="pagination" class="flex justify-center mt-8"></div>
            </main>

            <!-- Floating Post Button -->
            <button id="add-post-btn" class="fixed bottom-24 right-6 md:bottom-8 md:right-8 bg-purple-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl hover:bg-purple-700 transition-transform hover:scale-110">
                <i class="fas fa-plus"></i>
            </button>

            <!-- Bottom Nav for Mobile -->
            <nav class="fixed bottom-0 left-0 right-0 md:hidden bg-gray-800 border-t border-gray-700 p-4 flex justify-around items-center">
                 <a href="#" class="text-2xl"><i class="fas fa-home"></i></a>
                 <a href="#" class="text-2xl"><i class="fas fa-search"></i></a>
                 <a href="#" class="text-2xl"><i class="fas fa-film"></i></a>
                 <a href="#" class="text-2xl"><i class="fas fa-user-circle"></i></a>
            </nav>
        </div>

        <!-- Add/Edit Post Modal -->
        <div id="post-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-80 backdrop-blur-sm">
            <div class="w-full max-w-lg p-6 bg-gray-800 rounded-2xl shadow-lg">
                <h2 id="modal-title" class="text-2xl font-bold mb-4">Create New Post</h2>
                <input type="hidden" id="post-id-input">
                <input type="file" id="image-upload" accept="image/*" class="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 mb-4">
                <img id="image-preview" src="" class="hidden w-full h-64 object-cover rounded-lg mb-4">
                <div id="filter-gallery" class="flex space-x-2 overflow-x-auto mb-4 p-2 bg-gray-700 rounded-lg">
                    <!-- Filters will be here -->
                </div>
                <textarea id="caption-input" placeholder="Write a caption..." class="w-full p-2 bg-gray-700 rounded-lg mb-4 h-24"></textarea>
                <div class="flex justify-end space-x-4">
                    <button id="cancel-post-btn" class="px-4 py-2 bg-gray-600 rounded-lg">Cancel</button>
                    <button id="save-post-btn" class="px-4 py-2 bg-purple-600 rounded-lg">Post</button>
                </div>
            </div>
        </div>

        <!-- Comment Modal -->
        <div id="comment-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-80 backdrop-blur-sm">
            <div class="w-full max-w-md p-6 bg-gray-800 rounded-2xl shadow-lg flex flex-col h-4/5">
                <h2 class="text-xl font-bold mb-4">Comments</h2>
                <div id="comments-list" class="flex-grow overflow-y-auto mb-4 space-y-4">
                    <!-- Comments will be injected here -->
                </div>
                <div class="flex">
                    <input id="comment-input" type="text" placeholder="Add a comment..." class="w-full p-2 bg-gray-700 rounded-l-lg">
                    <button id="submit-comment-btn" class="px-4 py-2 bg-purple-600 rounded-r-lg">Send</button>
                </div>
                 <button id="close-comment-modal-btn" class="mt-4 w-full py-2 text-sm text-gray-400 hover:text-white">Close</button>
            </div>
        </div>

        <!-- Admin Dashboard -->
        <div id="admin-dashboard" class="hidden fixed inset-0 z-50 bg-gray-900 p-8 overflow-y-auto">
            <div class="container mx-auto">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-3xl font-bold">Admin Dashboard</h2>
                    <button id="close-admin-dashboard-btn" class="text-2xl"><i class="fas fa-times"></i></button>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-gray-800 p-4 rounded-lg">
                        <h3 class="font-semibold mb-2">User Activity</h3>
                        <div id="user-activity-list" class="max-h-96 overflow-y-auto"></div>
                    </div>
                    <div class="bg-gray-800 p-4 rounded-lg">
                        <h3 class="font-semibold mb-2">Site Controls</h3>
                        <button id="add-announcement-btn" class="w-full mb-2 py-2 bg-blue-600 rounded-lg">Add Announcement</button>
                        <button id="export-data-btn" class="w-full py-2 bg-green-600 rounded-lg">Export All Data (JSON)</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // --- DOM Elements ---
            const app = {
                loginScreen: document.getElementById('login-screen'),
                usernameInput: document.getElementById('username-input'),
                loginBtn: document.getElementById('login-btn'),
                adminLoginToggle: document.getElementById('admin-login-toggle'),
                adminLoginModal: document.getElementById('admin-login-modal'),
                adminPasswordInput: document.getElementById('admin-password-input'),
                adminLoginBtn: document.getElementById('admin-login-btn'),
                closeAdminModalBtn: document.getElementById('close-admin-modal-btn'),
                mainContent: document.getElementById('main-content'),
                header: document.querySelector('header'),
                storiesBar: document.getElementById('stories-bar'),
                postsFeed: document.getElementById('posts-feed'),
                pagination: document.getElementById('pagination'),
                addPostBtn: document.getElementById('add-post-btn'),
                postModal: document.getElementById('post-modal'),
                modalTitle: document.getElementById('modal-title'),
                postIdInput: document.getElementById('post-id-input'),
                imageUpload: document.getElementById('image-upload'),
                imagePreview: document.getElementById('image-preview'),
                filterGallery: document.getElementById('filter-gallery'),
                captionInput: document.getElementById('caption-input'),
                cancelPostBtn: document.getElementById('cancel-post-btn'),
                savePostBtn: document.getElementById('save-post-btn'),
                commentModal: document.getElementById('comment-modal'),
                commentsList: document.getElementById('comments-list'),
                commentInput: document.getElementById('comment-input'),
                submitCommentBtn: document.getElementById('submit-comment-btn'),
                closeCommentModalBtn: document.getElementById('close-comment-modal-btn'),
                darkModeToggle: document.getElementById('dark-mode-toggle'),
                currentUserDisplay: document.getElementById('current-user'),
                adminControls: document.getElementById('admin-controls'),
                adminDashboardToggle: document.getElementById('admin-dashboard-toggle'),
                adminDashboard: document.getElementById('admin-dashboard'),
                closeAdminDashboardBtn: document.getElementById('close-admin-dashboard-btn'),
                userActivityList: document.getElementById('user-activity-list'),
                addAnnouncementBtn: document.getElementById('add-announcement-btn'),
                exportDataBtn: document.getElementById('export-data-btn'),
                searchBar: document.getElementById('search-bar'),
            };

            // --- State ---
            let state = {
                currentUser: null,
                isAdmin: false,
                posts: [],
                users: {},
                darkMode: localStorage.getItem('darkMode') === 'true',
                editingPostId: null,
                commentingPostId: null,
                currentPage: 1,
                postsPerPage: 5,
                currentFilter: 'none'
            };

            // --- Database (localStorage) ---
            const db = {
                get: (key) => JSON.parse(localStorage.getItem(key) || '[]'),
                set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
                getUsers: () => JSON.parse(localStorage.getItem('users') || '{}'),
                saveUsers: (users) => localStorage.setItem('users', JSON.stringify(users)),
            };

            // --- Initialization ---
            function init() {
                // Load data
                state.posts = db.get('posts');
                state.users = db.getUsers();
                
                // Set theme
                updateTheme();

                // Check for logged in user
                state.currentUser = localStorage.getItem('currentUser');
                state.isAdmin = localStorage.getItem('isAdmin') === 'true';

                if (state.currentUser) {
                    showMainContent();
                } else {
                    app.loginScreen.style.display = 'flex';
                }
                
                setupEventListeners();
                if (state.posts.length === 0) {
                    loadSampleData();
                }
                renderAll();
            }
            
            function loadSampleData() {
                const samplePosts = [
                    { id: Date.now() + 1, username: 'naturelover', image: 'https://placehold.co/600x400/22c55e/ffffff?text=Nature', caption: 'Enjoying the great outdoors! 🌳 #nature #hiking', likes: [], comments: [] },
                    { id: Date.now() + 2, username: 'foodie', image: 'https://placehold.co/600x400/f97316/ffffff?text=Food', caption: 'Delicious meal today. #food #yummy', likes: [], comments: [] },
                    { id: Date.now() + 3, username: 'coderlife', image: 'https://placehold.co/600x400/3b82f6/ffffff?text=Code', caption: 'Late night coding session. #javascript #webdev', likes: [], comments: [] },
                ];
                state.posts = samplePosts;
                db.set('posts', state.posts);
            }

            // --- Rendering ---
            function renderAll() {
                if (state.currentUser) {
                    renderStories();
                    renderPosts();
                    renderPagination();
                    app.currentUserDisplay.textContent = `@${state.currentUser}`;
                    if (state.isAdmin) {
                        app.adminControls.style.display = 'block';
                    }
                }
            }

            function renderStories() {
                const uniqueUsers = [...new Set(state.posts.map(p => p.username))];
                app.storiesBar.innerHTML = uniqueUsers.map(username => `
                    <div class="text-center story-item cursor-pointer">
                        <div class="w-16 h-16 rounded-full p-1 bg-gradient-to-r from-purple-500 to-pink-500">
                            <img src="https://placehold.co/100x100/7c3aed/ffffff?text=${username.charAt(0).toUpperCase()}" class="w-full h-full rounded-full border-2 border-gray-800">
                        </div>
                        <span class="text-xs mt-1 block">${username}</span>
                    </div>
                `).join('');
            }
            
            function renderPosts(filteredPosts = null) {
                const postsToRender = filteredPosts || state.posts;
                app.postsFeed.innerHTML = ''; // Clear feed

                const start = (state.currentPage - 1) * state.postsPerPage;
                const end = start + state.postsPerPage;
                const paginatedPosts = postsToRender.slice(start, end);

                if (paginatedPosts.length === 0 && state.currentPage > 1) {
                    state.currentPage--;
                    renderPosts(filteredPosts);
                    return;
                }

                if (paginatedPosts.length === 0) {
                    app.postsFeed.innerHTML = `<p class="text-center text-gray-400">No posts found. Create one!</p>`;
                    return;
                }
                
                paginatedPosts.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.className = 'bg-gray-800 rounded-xl overflow-hidden shadow-lg';
                    postElement.dataset.id = post.id;
                    
                    const isLiked = post.likes.includes(state.currentUser);
                    const userLiked = state.users[state.currentUser]?.likedPosts?.includes(post.id);

                    postElement.innerHTML = `
                        <div class="p-4 flex justify-between items-center">
                            <div class="flex items-center space-x-3">
                                <img src="https://placehold.co/40x40/7c3aed/ffffff?text=${post.username.charAt(0).toUpperCase()}" class="w-10 h-10 rounded-full">
                                <span class="font-semibold">${post.username}</span>
                                ${post.username === 'admin' ? '<i class="fas fa-check-circle text-blue-400" title="Announcement"></i>' : ''}
                            </div>
                            ${state.isAdmin || state.currentUser === post.username ? `
                            <div class="relative">
                                <button class="post-menu-btn text-gray-400"><i class="fas fa-ellipsis-h"></i></button>
                                <div class="post-menu hidden absolute right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-xl z-20">
                                    <a href="#" class="edit-post-btn block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600">Edit</a>
                                    <a href="#" class="delete-post-btn block px-4 py-2 text-sm text-red-400 hover:bg-gray-600">Delete</a>
                                    <a href="#" class="download-post-btn block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600">Download</a>
                                </div>
                            </div>
                            ` : ''}
                        </div>
                        <img src="${post.image}" alt="Post image" class="w-full h-auto object-cover lazy" loading="lazy" style="filter: ${post.filter || 'none'}">
                        <div class="p-4">
                            <div class="flex items-center space-x-4 mb-2">
                                <button class="like-btn text-2xl ${isLiked || userLiked ? 'text-red-500' : ''}">
                                    <i class="fas fa-heart"></i>
                                </button>
                                <button class="comment-btn text-2xl"><i class="far fa-comment"></i></button>
                                <button class="share-btn text-2xl"><i class="far fa-paper-plane"></i></button>
                            </div>
                            <p class="font-semibold">${post.likes.length} likes</p>
                            <p class="mt-2"><span class="font-semibold">${post.username}</span> ${parseCaption(post.caption)}</p>
                            <button class="view-comments-btn text-sm text-gray-400 mt-2">View all ${post.comments.length} comments</button>
                        </div>
                    `;
                    app.postsFeed.appendChild(postElement);
                });
            }

            function renderPagination(filteredPosts = null) {
                const postsToRender = filteredPosts || state.posts;
                const totalPages = Math.ceil(postsToRender.length / state.postsPerPage);
                app.pagination.innerHTML = '';
                if(totalPages <= 1) return;

                for (let i = 1; i <= totalPages; i++) {
                    const pageBtn = document.createElement('button');
                    pageBtn.textContent = i;
                    pageBtn.className = `px-4 py-2 mx-1 rounded-lg ${state.currentPage === i ? 'bg-purple-600 text-white' : 'bg-gray-700'}`;
                    pageBtn.addEventListener('click', () => {
                        state.currentPage = i;
                        renderPosts(filteredPosts);
                        renderPagination(filteredPosts);
                        window.scrollTo(0, 0);
                    });
                    app.pagination.appendChild(pageBtn);
                }
            }
            
            function renderComments() {
                const post = state.posts.find(p => p.id === state.commentingPostId);
                if (!post) return;

                app.commentsList.innerHTML = post.comments.map(comment => `
                    <div class="flex items-start space-x-3">
                        <img src="https://placehold.co/32x32/7c3aed/ffffff?text=${comment.username.charAt(0).toUpperCase()}" class="w-8 h-8 rounded-full">
                        <div>
                            <p><span class="font-semibold">${comment.username}</span> ${comment.text}</p>
                            <span class="text-xs text-gray-400">${new Date(comment.timestamp).toLocaleString()}</span>
                        </div>
                    </div>
                `).join('');
            }

            function renderAdminDashboard() {
                app.userActivityList.innerHTML = Object.entries(state.users).map(([username, data]) => `
                    <div class="p-2 border-b border-gray-700">
                        <p class="font-semibold">@${username}</p>
                        <p class="text-sm text-gray-400">Posts: ${data.postCount || 0}, Likes: ${data.likedPosts?.length || 0}, Comments: ${data.commentCount || 0}</p>
                    </div>
                `).join('');
            }

            function parseCaption(caption) {
                return caption
                    .replace(/#(\w+)/g, '<a href="#" class="text-blue-400 hashtag-link">#$1</a>')
                    .replace(/@(\w+)/g, '<a href="#" class="text-purple-400 user-link">@$1</a>');
            }

            // --- Event Listeners ---
            function setupEventListeners() {
                app.loginBtn.addEventListener('click', handleLogin);
                app.usernameInput.addEventListener('keypress', (e) => e.key === 'Enter' && handleLogin());
                app.adminLoginToggle.addEventListener('click', () => app.adminLoginModal.style.display = 'flex');
                app.closeAdminModalBtn.addEventListener('click', () => app.adminLoginModal.style.display = 'none');
                app.adminLoginBtn.addEventListener('click', handleAdminLogin);
                app.adminPasswordInput.addEventListener('keypress', (e) => e.key === 'Enter' && handleAdminLogin());
                
                app.darkModeToggle.addEventListener('click', toggleTheme);
                app.addPostBtn.addEventListener('click', openPostModal);
                app.cancelPostBtn.addEventListener('click', closePostModal);
                app.savePostBtn.addEventListener('click', handleSavePost);
                app.imageUpload.addEventListener('change', handleImagePreview);
                
                app.postsFeed.addEventListener('click', handlePostInteraction);
                
                app.submitCommentBtn.addEventListener('click', handleAddComment);
                app.commentInput.addEventListener('keypress', (e) => e.key === 'Enter' && handleAddComment());
                app.closeCommentModalBtn.addEventListener('click', () => app.commentModal.style.display = 'none');
                
                app.adminDashboardToggle.addEventListener('click', openAdminDashboard);
                app.closeAdminDashboardBtn.addEventListener('click', () => app.adminDashboard.style.display = 'none');
                app.addAnnouncementBtn.addEventListener('click', addAnnouncement);
                app.exportDataBtn.addEventListener('click', exportData);
                
                app.searchBar.addEventListener('input', handleSearch);
                
                window.addEventListener('scroll', handleInfiniteScroll);
            }

            // --- Handlers ---
            function handleLogin() {
                const username = app.usernameInput.value.trim();
                if (username) {
                    state.currentUser = username;
                    localStorage.setItem('currentUser', username);
                    if (!state.users[username]) {
                        state.users[username] = { postCount: 0, likedPosts: [], commentCount: 0 };
                        db.saveUsers(state.users);
                    }
                    showMainContent();
                    renderAll();
                }
            }

            function handleAdminLogin() {
                if (app.adminPasswordInput.value === '007124') {
                    state.isAdmin = true;
                    localStorage.setItem('isAdmin', 'true');
                    handleLogin(); // Log in as admin
                    app.adminLoginModal.style.display = 'none';
                } else {
                    alert('Incorrect admin password.');
                }
            }
            
            function showMainContent() {
                app.loginScreen.style.display = 'none';
                app.mainContent.style.display = 'block';
            }

            function openPostModal(post = null) {
                state.editingPostId = post ? post.id : null;
                app.modalTitle.textContent = post ? 'Edit Post' : 'Create New Post';
                app.captionInput.value = post ? post.caption : '';
                app.imagePreview.src = post ? post.image : '';
                app.imagePreview.style.display = post ? 'block' : 'none';
                app.imageUpload.value = '';
                app.postIdInput.value = post ? post.id : '';
                
                setupFilterGallery(post ? post.image : null);

                app.postModal.style.display = 'flex';
            }

            function closePostModal() {
                app.postModal.style.display = 'none';
                state.editingPostId = null;
                state.currentFilter = 'none';
                app.imagePreview.style.filter = 'none';
            }

            function handleSavePost() {
                const caption = app.captionInput.value.trim();
                const imageFile = app.imageUpload.files[0];
                const existingImage = app.imagePreview.src;

                if (!caption || (!imageFile && !state.editingPostId)) {
                    alert('Please provide an image and a caption.');
                    return;
                }

                const processPost = (imageUrl) => {
                    if (state.editingPostId) {
                        // Edit existing post
                        const postIndex = state.posts.findIndex(p => p.id === state.editingPostId);
                        if (postIndex > -1) {
                            state.posts[postIndex].caption = caption;
                            state.posts[postIndex].image = imageUrl;
                            state.posts[postIndex].filter = state.currentFilter;
                        }
                    } else {
                        // Create new post
                        const newPost = {
                            id: Date.now(),
                            username: state.currentUser,
                            image: imageUrl,
                            caption: caption,
                            likes: [],
                            comments: [],
                            filter: state.currentFilter
                        };
                        state.posts.unshift(newPost);
                        // Update user stats
                        state.users[state.currentUser].postCount = (state.users[state.currentUser].postCount || 0) + 1;
                        db.saveUsers(state.users);
                    }
                    db.set('posts', state.posts);
                    closePostModal();
                    renderAll();
                };

                if (imageFile) {
                    const reader = new FileReader();
                    reader.onload = (e) => processPost(e.target.result);
                    reader.readAsDataURL(imageFile);
                } else if (state.editingPostId) {
                    processPost(existingImage);
                }
            }

            function handleImagePreview(e) {
                if (e.target.files && e.target.files[0]) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        app.imagePreview.src = event.target.result;
                        app.imagePreview.style.display = 'block';
                        setupFilterGallery(event.target.result);
                    };
                    reader.readAsDataURL(e.target.files[0]);
                }
            }
            
            function setupFilterGallery(imageUrl) {
                if (!imageUrl) {
                    app.filterGallery.innerHTML = '<p class="text-gray-400 text-sm">Upload an image to see filters.</p>';
                    return;
                }
                const filters = [
                    { name: 'none', label: 'Normal' },
                    { name: 'grayscale(100%)', label: 'Gray' },
                    { name: 'sepia(100%)', label: 'Sepia' },
                    { name: 'invert(100%)', label: 'Invert' },
                    { name: 'blur(5px)', label: 'Blur' },
                    { name: 'brightness(150%)', label: 'Bright' },
                    { name: 'contrast(200%)', label: 'Contrast' },
                ];
                
                app.filterGallery.innerHTML = filters.map(filter => `
                    <div class="text-center cursor-pointer filter-item" data-filter="${filter.name}">
                        <img src="${imageUrl}" class="w-20 h-20 object-cover rounded-md" style="filter: ${filter.name}">
                        <span class="text-xs mt-1 block">${filter.label}</span>
                    </div>
                `).join('');
            }
            
            app.filterGallery.addEventListener('click', (e) => {
                const filterItem = e.target.closest('.filter-item');
                if (filterItem) {
                    state.currentFilter = filterItem.dataset.filter;
                    app.imagePreview.style.filter = state.currentFilter;
                }
            });

            function handlePostInteraction(e) {
                const postElement = e.target.closest('[data-id]');
                if (!postElement) return;
                const postId = Number(postElement.dataset.id);

                // Like button
                if (e.target.closest('.like-btn')) {
                    toggleLike(postId, e.target.closest('.like-btn'));
                }
                // Comment button
                if (e.target.closest('.comment-btn') || e.target.closest('.view-comments-btn')) {
                    openCommentModal(postId);
                }
                // Post menu toggle
                if (e.target.closest('.post-menu-btn')) {
                    e.target.closest('.post-menu-btn').nextElementSibling.classList.toggle('hidden');
                }
                // Edit button
                if (e.target.closest('.edit-post-btn')) {
                    const post = state.posts.find(p => p.id === postId);
                    openPostModal(post);
                }
                // Delete button
                if (e.target.closest('.delete-post-btn')) {
                    if (confirm('Are you sure you want to delete this post?')) {
                        deletePost(postId);
                    }
                }
                // Download button
                if (e.target.closest('.download-post-btn')) {
                    const post = state.posts.find(p => p.id === postId);
                    downloadImage(post.image, `instaclone-${post.id}.png`);
                }
                 // Hashtag/User link
                if (e.target.matches('.hashtag-link, .user-link')) {
                    e.preventDefault();
                    app.searchBar.value = e.target.textContent;
                    handleSearch();
                }
            }

            function toggleLike(postId, button) {
                const post = state.posts.find(p => p.id === postId);
                const user = state.users[state.currentUser];
                const likeIndex = post.likes.indexOf(state.currentUser);
                const userLikeIndex = user.likedPosts.indexOf(postId);

                if (likeIndex > -1) {
                    post.likes.splice(likeIndex, 1);
                    if (userLikeIndex > -1) user.likedPosts.splice(userLikeIndex, 1);
                } else {
                    post.likes.push(state.currentUser);
                    if (userLikeIndex === -1) user.likedPosts.push(postId);
                    button.classList.add('heart-animation');
                    setTimeout(() => button.classList.remove('heart-animation'), 500);
                }
                db.set('posts', state.posts);
                db.saveUsers(state.users);
                renderAll();
            }
            
            function deletePost(postId) {
                state.posts = state.posts.filter(p => p.id !== postId);
                db.set('posts', state.posts);
                renderAll();
            }

            function openCommentModal(postId) {
                state.commentingPostId = postId;
                renderComments();
                app.commentModal.style.display = 'flex';
                app.commentInput.focus();
            }

            function handleAddComment() {
                const text = app.commentInput.value.trim();
                if (!text || !state.commentingPostId) return;

                const post = state.posts.find(p => p.id === state.commentingPostId);
                post.comments.push({
                    username: state.currentUser,
                    text: text,
                    timestamp: Date.now()
                });
                
                // Update user stats
                state.users[state.currentUser].commentCount = (state.users[state.currentUser].commentCount || 0) + 1;
                db.saveUsers(state.users);

                db.set('posts', state.posts);
                app.commentInput.value = '';
                renderComments();
                renderPosts(); // To update comment count
            }

            function openAdminDashboard() {
                renderAdminDashboard();
                app.adminDashboard.style.display = 'block';
            }
            
            function addAnnouncement() {
                openPostModal();
                app.modalTitle.textContent = 'Create Announcement';
                // Override user to admin for this post
                const originalUser = state.currentUser;
                state.currentUser = 'admin';
                // After saving, we'll need to revert this. A bit of a hack for frontend only.
                const tempSaveHandler = () => {
                    handleSavePost();
                    state.currentUser = originalUser;
                    app.savePostBtn.removeEventListener('click', tempSaveHandler);
                    app.savePostBtn.addEventListener('click', handleSavePost);
                };
                app.savePostBtn.removeEventListener('click', handleSavePost);
                app.savePostBtn.addEventListener('click', tempSaveHandler);
            }
            
            function exportData() {
                const data = {
                    posts: state.posts,
                    users: state.users,
                    darkMode: state.darkMode
                };
                const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
                const downloadAnchorNode = document.createElement('a');
                downloadAnchorNode.setAttribute("href", dataStr);
                downloadAnchorNode.setAttribute("download", "instaclone_data.json");
                document.body.appendChild(downloadAnchorNode);
                downloadAnchorNode.click();
                downloadAnchorNode.remove();
            }
            
            function downloadImage(url, filename) {
                 fetch(url)
                    .then(response => response.blob())
                    .then(blob => {
                        const link = document.createElement('a');
                        link.href = URL.createObjectURL(blob);
                        link.download = filename;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    })
                    .catch(() => alert('Could not download image.'));
            }
            
            function handleSearch() {
                const query = app.searchBar.value.toLowerCase().trim();
                if (!query) {
                    renderPosts();
                    renderPagination();
                    return;
                }
                
                const filteredPosts = state.posts.filter(post => {
                    const usernameMatch = post.username.toLowerCase().includes(query.replace('@', ''));
                    const captionMatch = post.caption.toLowerCase().includes(query);
                    return usernameMatch || captionMatch;
                });

                state.currentPage = 1;
                renderPosts(filteredPosts);
                renderPagination(filteredPosts);
            }
            
            function handleInfiniteScroll() {
                // Simple pagination is used instead of infinite scroll for better control
                // This function can be extended for infinite scroll if needed
            }

            // --- Theme ---
            function updateTheme() {
                const html = document.documentElement;
                if (state.darkMode) {
                    html.classList.add('dark');
                    html.classList.remove('light');
                    app.darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                } else {
                    html.classList.add('light');
                    html.classList.remove('dark');
                    app.darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                }
            }

            function toggleTheme() {
                state.darkMode = !state.darkMode;
                localStorage.setItem('darkMode', state.darkMode);
                updateTheme();
            }
            
            // --- PWA ---
            if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                    navigator.serviceWorker.register('/service-worker.js').then(registration => {
                        console.log('ServiceWorker registration successful with scope: ', registration.scope);
                    }, err => {
                        console.log('ServiceWorker registration failed: ', err);
                    });
                });
            }

            // --- Start the App ---
            init();
        });

        // Create dummy manifest.json and service-worker.js for PWA functionality
        // In a real scenario, these would be separate files.
        const manifest = {
            "name": "InstaClone",
            "short_name": "InstaClone",
            "start_url": ".",
            "display": "standalone",
            "background_color": "#111827",
            "theme_color": "#8b5cf6",
            "description": "A frontend-only Instagram clone.",
            "icons": [{
                "src": "https://placehold.co/192x192/8b5cf6/ffffff?text=IC",
                "sizes": "192x192",
                "type": "image/png"
            }, {
                "src": "https://placehold.co/512x512/8b5cf6/ffffff?text=IC",
                "sizes": "512x512",
                "type": "image/png"
            }]
        };
        const manifestBlob = new Blob([JSON.stringify(manifest)], {type: 'application/json'});
        const manifestURL = URL.createObjectURL(manifestBlob);
        document.querySelector('link[rel="manifest"]').href = manifestURL;
        
        const swCode = `
            self.addEventListener('install', event => {
              console.log('Service worker installing...');
            });

            self.addEventListener('fetch', event => {
              // Basic cache-first strategy can be implemented here
              event.respondWith(fetch(event.request));
            });
        `;
        const swBlob = new Blob([swCode], {type: 'application/javascript'});
        const swURL = URL.createObjectURL(swBlob);
        // We can't register from a blob URL due to security restrictions,
        // but this demonstrates the setup. In a real project, service-worker.js would be a static file.
        // navigator.serviceWorker.register(swURL);
    </script>
</body>
</html>
