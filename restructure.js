const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const srcDir = path.join(baseDir, 'src');
const serverDir = path.join(baseDir, 'server');

// Helper to create dir
const ensureDir = (p) => {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
};

// Directories to create
const dirs = [
  path.join(srcDir, 'state'),
  path.join(srcDir, 'services'),
  path.join(srcDir, 'hooks'),
  path.join(srcDir, 'utils'),
  path.join(srcDir, 'styles'),
  path.join(srcDir, 'assets', 'icons'),
  path.join(srcDir, 'assets', 'images'),
  path.join(srcDir, 'components', 'Layout'),
  path.join(srcDir, 'components', 'UI'),
  path.join(srcDir, 'components', 'Landing'),
  path.join(srcDir, 'components', 'Flow'),
  path.join(srcDir, 'components', 'Panels'),
  path.join(serverDir, 'config'),
  path.join(serverDir, 'services'),
  path.join(serverDir, 'controllers'),
  path.join(serverDir, 'routes'),
  path.join(serverDir, 'middleware'),
];
dirs.forEach(ensureDir);

// Helper to write placeholder file if not exists
const ensureFile = (p, content = '// Placeholder\n') => {
  if (!fs.existsSync(p)) fs.writeFileSync(p, content);
};

// Create placeholders in src
ensureFile(path.join(srcDir, 'state', 'AppState.jsx'));
ensureFile(path.join(srcDir, 'services', 'deepgramService.js'));
ensureFile(path.join(srcDir, 'services', 'grokService.js'));
ensureFile(path.join(srcDir, 'services', 'audioService.js'));
ensureFile(path.join(srcDir, 'services', 'keyStorage.js'));
ensureFile(path.join(srcDir, 'hooks', 'useAudio.js'));
ensureFile(path.join(srcDir, 'utils', 'permissions.js'));
ensureFile(path.join(srcDir, 'utils', 'helpers.js'));
ensureFile(path.join(srcDir, 'styles', 'global.css'), '/* Global Styles */\n');
ensureFile(path.join(srcDir, 'styles', 'theme.css'), '/* Theme Styles */\n');

ensureFile(path.join(srcDir, 'components', 'UI', 'Toggle.jsx'));
ensureFile(path.join(srcDir, 'components', 'UI', 'Table.jsx'));

// Landing components
['Hero.jsx', 'ProductPreview.jsx', 'HowItWorks.jsx', 'Features.jsx', 'UseCases.jsx', 'WhyChoose.jsx', 'DemoSection.jsx', 'Testimonials.jsx', 'CTASection.jsx'].forEach(f => {
  ensureFile(path.join(srcDir, 'components', 'Landing', f));
});

// Flow components
['FlowCanvas.jsx', 'InputNode.jsx', 'ProcessNode.jsx', 'OutputNode.jsx', 'EdgeConnector.jsx'].forEach(f => {
  ensureFile(path.join(srcDir, 'components', 'Flow', f));
});

// Panels
['RightPanel.jsx', 'OutputPreview.jsx', 'LogsPanel.jsx', 'BalancePanel.jsx'].forEach(f => {
  // BalancePanel is right under components based on the plan tree
  if(f === 'BalancePanel.jsx') {
    ensureFile(path.join(srcDir, 'components', f));
  } else {
    ensureFile(path.join(srcDir, 'components', 'Panels', f));
  }
});

// Pages
['Landing.jsx', 'AppPage.jsx', 'Settings.jsx', 'Dashboard.jsx', 'History.jsx', 'Templates.jsx', 'Recorder.jsx', 'Profile.jsx', 'Login.jsx', 'Signup.jsx', 'Playground.jsx'].forEach(f => {
  ensureFile(path.join(srcDir, 'pages', f));
});

// Backend files
ensureFile(path.join(serverDir, 'index.js'));
ensureFile(path.join(serverDir, 'config', 'config.js'));
ensureFile(path.join(serverDir, 'services', 'deepgramService.js'));
ensureFile(path.join(serverDir, 'services', 'grokService.js'));
ensureFile(path.join(serverDir, 'services', 'balanceService.js'));
ensureFile(path.join(serverDir, 'controllers', 'deepgramController.js'));
ensureFile(path.join(serverDir, 'controllers', 'grokController.js'));
ensureFile(path.join(serverDir, 'controllers', 'balanceController.js'));
ensureFile(path.join(serverDir, 'routes', 'deepgramRoutes.js'));
ensureFile(path.join(serverDir, 'routes', 'grokRoutes.js'));
ensureFile(path.join(serverDir, 'routes', 'balanceRoutes.js'));
ensureFile(path.join(serverDir, 'middleware', 'errorHandler.js'));

// Move existing components/layout to components/Layout
try {
  const oldLayout = path.join(srcDir, 'components', 'layout');
  const newLayout = path.join(srcDir, 'components', 'Layout');
  if (fs.existsSync(oldLayout)) {
    fs.readdirSync(oldLayout).forEach(f => {
      // User asked for Navbar.jsx, Sidebar.jsx, Footer.jsx
      // We will move everything there
      fs.renameSync(path.join(oldLayout, f), path.join(newLayout, f));
    });
    fs.rmdirSync(oldLayout);
  }
} catch(e) { console.error('Error moving layout:', e.message); }

try {
  const oldUI = path.join(srcDir, 'components', 'ui');
  const newUI = path.join(srcDir, 'components', 'UI');
  if (fs.existsSync(oldUI)) {
    fs.readdirSync(oldUI).forEach(f => {
      fs.renameSync(path.join(oldUI, f), path.join(newUI, f));
    });
    fs.rmdirSync(oldUI);
  }
} catch(e) { console.error('Error moving UI:', e.message); }

console.log('Restructure part 1 complete.');
