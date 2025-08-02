# Custom Page Mod for Sine

A powerful demonstration of Sine's capabilities that creates a custom HTML page accessible through Firefox's UI with full JavaScript functionality.

## 🌟 Features

- **🔘 Toolbar Button**: Adds a custom button to Firefox's navigation toolbar
- **📱 Custom HTML Page**: Beautiful, interactive "Hello World" page with animations
- **⌨️ Keyboard Shortcut**: Quick access with `Ctrl+Shift+H`
- **🎨 Interactive Elements**: Background changer, message adder, custom alerts
- **📊 Live Counters**: Page view counter and time-on-page tracker
- **🎮 Easter Egg**: Hidden Konami code functionality
- **🔧 Full JavaScript Access**: Demonstrates unrestricted browser API access

## 🚀 What This Demonstrates

Unlike browser extensions which are sandboxed and limited, this Sine mod shows the power of direct browser integration:

1. **XUL/Chrome UI Modification**: Directly modifies Firefox's toolbar
2. **Unrestricted JavaScript**: Full access to browser APIs and internal functions
3. **Custom HTML Pages**: Creates standalone pages within the browser
4. **Event Handling**: Keyboard shortcuts and UI interactions
5. **Local Storage**: Persistent data across browser sessions
6. **Dynamic Content**: Real-time page manipulation

## 📁 File Structure

```
461d2014-9cdc-4c4c-8e96-2b9df109a952/
├── theme.json          # Mod configuration
├── userChrome.css      # Firefox UI styling
├── userContent.css     # Web content styling (minimal)
├── customPage.uc.js    # Main JavaScript functionality
├── custom-page.html    # The custom HTML page
└── README.md           # This documentation
```

## 🔧 Technical Details

### JavaScript Integration (`customPage.uc.js`)
- Creates XUL toolbar button using `document.createXULElement()`
- Implements modal dialog with iframe content
- Handles keyboard shortcuts and events
- Provides global API through `window.CustomPageMod`

### UI Styling (`userChrome.css`)
- Styles the custom toolbar button
- Defines dialog appearance and backdrop
- Integrates seamlessly with Firefox's native theme

### Custom Page (`custom-page.html`)
- Standalone HTML page with embedded CSS/JS
- Interactive elements and animations
- Local storage integration
- Demonstrates full web API access

## 🎯 How It Works

1. **Initialization**: JavaScript loads when Firefox starts
2. **UI Injection**: Button added to toolbar via XUL manipulation
3. **Event Binding**: Click and keyboard events attached
4. **Dialog Creation**: Modal dialog created dynamically
5. **Content Loading**: Custom HTML loaded in iframe
6. **Full Interaction**: All standard web APIs available

## 🔍 Key Differences from Extensions

| Feature | Browser Extension | Sine Mod |
|---------|-------------------|----------|
| Browser UI Access | Limited/None | Full Access |
| JavaScript APIs | Sandboxed | Unrestricted |
| Performance | Limited | Native Speed |
| Internal APIs | Blocked | Available |
| XUL Manipulation | Impossible | Full Access |
| Installation | Store Required | Direct Install |

## 💡 Usage

1. **Install the mod** through Sine's interface
2. **Restart Firefox** for full functionality
3. **Look for the new button** in the toolbar (info icon)
4. **Click the button** or press `Ctrl+Shift+H` to open the custom page
5. **Interact with elements** to see JavaScript functionality

## 🛠️ Customization Ideas

This mod serves as a template for creating powerful Firefox modifications:

- **Custom Dashboards**: Create browser start pages
- **Advanced Tools**: Build developer utilities
- **UI Enhancements**: Modify browser interface
- **Integration Features**: Connect with external services
- **Automation Scripts**: Automate browser tasks

## 🎮 Easter Egg

Try entering the Konami code on the custom page:
`↑ ↑ ↓ ↓ ← → ← → B A`

## 🐛 Troubleshooting

**Button not appearing?**
- Ensure Sine is properly installed
- Check that the mod is enabled
- Restart Firefox completely

**Page not loading?**
- Verify all files are in the correct directory
- Check browser console for errors
- Ensure file permissions are correct

**JavaScript not working?**
- Confirm `js: true` is set in theme.json
- Check that JS files are properly named
- Verify Firefox allows userscripts

## 📚 Learning Resources

This mod demonstrates several advanced concepts:

- **XUL Programming**: Firefox's UI description language
- **UserChrome.css**: Browser interface styling
- **UserScript Integration**: JavaScript injection patterns
- **Modal Dialog Creation**: Dynamic UI elements
- **Event Handling**: Browser and page interactions

## 🔒 Security Note

Since this mod has full browser access, only install from trusted sources. The power of Sine mods means they can modify any aspect of the browser.

## 🤝 Contributing

Use this mod as a foundation for your own creations! The patterns shown here can be adapted for:

- Custom browser tools
- Enhanced user interfaces  
- Automation scripts
- Integration features
- Developer utilities

---

**🎉 Enjoy the power of unrestricted browser modification with Sine!**
