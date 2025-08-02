// ==UserScript==
// @name        Custom Page Mod
// @description Adds a custom page accessible through Firefox UI
// @author      Sine Custom
// @version     1.0.0
// @include     main
// ==/UserScript==

// This script adds a button to Firefox's toolbar that opens a custom HTML page in a dialog

(function() {
    'use strict';
    
    console.log('🚀 Custom Page Mod: Initializing...');
    
    // Wait for the browser window to be ready
    if (window.location.href !== "chrome://browser/content/browser.xhtml") {
        return;
    }
    
    // Function to create and inject the custom button
    function createCustomButton() {
        const navbar = document.getElementById('nav-bar');
        if (!navbar) {
            console.warn('Custom Page Mod: Navigation bar not found, retrying...');
            setTimeout(createCustomButton, 1000);
            return;
        }
        
        // Check if button already exists
        if (document.getElementById('custom-page-button')) {
            console.log('Custom Page Mod: Button already exists');
            return;
        }
        
        // Create the toolbar button
        const button = document.createXULElement('toolbarbutton');
        button.id = 'custom-page-button';
        button.setAttribute('label', 'Custom Page');
        button.setAttribute('tooltiptext', 'Open Custom Hello World Page');
        button.setAttribute('class', 'toolbarbutton-1');
        
        // Add click event listener
        button.addEventListener('click', openCustomPage);
        
        // Find a good place to insert the button (after the address bar)
        const urlbar = document.getElementById('urlbar-container');
        if (urlbar && urlbar.nextSibling) {
            navbar.insertBefore(button, urlbar.nextSibling);
        } else {
            // Fallback: append to the end of the navbar
            navbar.appendChild(button);
        }
        
        console.log('✅ Custom Page Mod: Button created and added to toolbar');
    }
    
    // Function to create the dialog if it doesn't exist
    function createDialog() {
        if (document.getElementById('custom-page-dialog')) {
            return document.getElementById('custom-page-dialog');
        }
        
        const dialog = document.createElement('dialog');
        dialog.id = 'custom-page-dialog';
        
        // Create close button
        const closeButton = document.createElement('button');
        closeButton.textContent = '✕';
        closeButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            font-size: 18px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            cursor: pointer;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        closeButton.addEventListener('click', () => {
            dialog.close();
        });
        
        // Create iframe to load our custom HTML page
        const iframe = document.createElement('iframe');
        iframe.id = 'custom-page-content';
        
        // Get the path to our custom HTML file
        const htmlPath = 'chrome://userscripts/content/sine-mods/461d2014-9cdc-4c4c-8e96-2b9df109a952/custom-page.html';
        iframe.src = htmlPath;
        
        dialog.appendChild(closeButton);
        dialog.appendChild(iframe);
        
        // Close dialog when clicking outside
        dialog.addEventListener('click', (e) => {
            if (e.target === dialog) {
                dialog.close();
            }
        });
        
        // Close dialog with Escape key
        dialog.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                dialog.close();
            }
        });
        
        // Append to document body
        document.body.appendChild(dialog);
        
        console.log('✅ Custom Page Mod: Dialog created');
        return dialog;
    }
    
    // Function to open the custom page
    function openCustomPage() {
        try {
            const dialog = createDialog();
            dialog.showModal();
            console.log('📖 Custom Page Mod: Dialog opened');
        } catch (error) {
            console.error('❌ Custom Page Mod: Error opening dialog:', error);
            
            // Fallback: Open in new tab if dialog fails
            const htmlPath = 'chrome://userscripts/content/sine-mods/461d2014-9cdc-4c4c-8e96-2b9df109a952/custom-page.html';
            window.open(htmlPath, '_blank');
        }
    }
    
    // Initialize when DOM is ready
    function initialize() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', createCustomButton);
        } else {
            createCustomButton();
        }
    }
    
    // Add some utility functions that can be accessed globally
    window.CustomPageMod = {
        openPage: openCustomPage,
        version: '1.0.0',
        
        // Function to add custom menu item (bonus feature)
        addToContextMenu: function() {
            // This could be expanded to add context menu items
            console.log('Custom Page Mod: Context menu integration available');
        },
        
        // Function to create notification
        showNotification: function(message) {
            try {
                const notification = new Notification('Custom Page Mod', {
                    body: message,
                    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="%23888888" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM7 4h2v2H7V4zm0 3h2v5H7V7z"/></svg>'
                });
                
                setTimeout(() => notification.close(), 3000);
            } catch (e) {
                console.log('Custom Page Mod: ' + message);
            }
        }
    };
    
    // Register keyboard shortcut (Ctrl+Shift+H)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'H') {
            openCustomPage();
            e.preventDefault();
        }
    });
    
    // Start initialization
    initialize();
    
    // Show notification that mod is loaded
    setTimeout(() => {
        if (window.CustomPageMod) {
            window.CustomPageMod.showNotification('Custom Page Mod loaded! Click the button in toolbar or press Ctrl+Shift+H');
        }
    }, 2000);
    
    console.log('🎉 Custom Page Mod: Script loaded successfully');
    
})();
