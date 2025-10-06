# 🔧 Troubleshooting Guide

## Common Next.js Development Issues

### 1. 🚨 Module Not Found Errors (./787.js, ./161.js, etc.)

**Symptoms:**
```
Error: Cannot find module './787.js'
Error: Cannot find module './161.js'
Internal Server Error
```

**Cause:**
- Corrupted `.next` build cache
- Webpack module resolution issues
- Incomplete builds

**Solution:**
```powershell
# 1. Remove corrupted build folder
Remove-Item -Recurse -Force .next

# 2. Clear npm cache
npm cache clean --force

# 3. Reinstall dependencies (optional)
npm install

# 4. Start fresh development server
npm run dev
```

---

### 2. 🚨 Build Manifest Errors

**Symptoms:**
```
Error: ENOENT: no such file or directory, open '.next\fallback-build-manifest.json'
```

**Cause:**
- Missing or corrupted build manifest files
- Incomplete Next.js build process

**Solution:**
Same as above - clean rebuild fixes this.

---

### 3. 🚨 Port Already in Use

**Symptoms:**
```
⚠ Port 3000 is in use, trying 3001 instead.
```

**Solutions:**
```powershell
# Option 1: Use different port
npm run dev -- -p 3002

# Option 2: Kill process using port 3000
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Option 3: Let Next.js auto-select port (default behavior)
# Just continue with the suggested port
```

---

### 4. 🚨 Environment Variables Not Loading

**Symptoms:**
- API routes failing
- Missing environment variables in production

**Solutions:**
```powershell
# 1. Check .env.local exists and has correct format
# 2. Restart development server after env changes
# 3. For production, set variables in hosting platform

# Vercel:
# Dashboard → Project → Settings → Environment Variables

# Netlify:
# Dashboard → Site → Site Settings → Environment Variables
```

---

### 5. 🚨 TypeScript Errors

**Symptoms:**
```
Type errors in components
Cannot find module declarations
```

**Solutions:**
```powershell
# 1. Check TypeScript configuration
npx tsc --noEmit

# 2. Restart TypeScript server in VS Code
# Ctrl+Shift+P → "TypeScript: Restart TS Server"

# 3. Clear TypeScript cache
Remove-Item -Recurse -Force .next
```

---

### 6. 🚨 CSS/Styling Issues

**Symptoms:**
- Styles not loading
- Tailwind classes not working
- CSS conflicts

**Solutions:**
```powershell
# 1. Check Tailwind config
npx tailwindcss -i ./app/globals.css -o ./dist/output.css --watch

# 2. Clear build cache
Remove-Item -Recurse -Force .next

# 3. Check for CSS import order issues
```

---

## 🚀 Quick Fix Commands

### Complete Clean Rebuild:
```powershell
Remove-Item -Recurse -Force .next
npm cache clean --force
npm install
npm run dev
```

### Production Build Test:
```powershell
npm run build
npm run start
```

### Dependency Issues:
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

---

## 📊 Health Check Commands

### Check Next.js Version:
```powershell
npx next --version
```

### Check Node Version:
```powershell
node --version
npm --version
```

### Check Build Status:
```powershell
npm run build
```

### Check TypeScript:
```powershell
npx tsc --noEmit
```

---

## 🎯 Prevention Tips

### 1. **Regular Cleanup:**
- Clear `.next` folder weekly during development
- Run `npm cache clean --force` monthly

### 2. **Proper Git Practices:**
- Add `.next/` to `.gitignore`
- Never commit build artifacts
- Use `npm ci` in production

### 3. **Environment Management:**
- Keep `.env.local` for development only
- Use platform environment variables for production
- Never commit sensitive environment variables

### 4. **Development Workflow:**
```powershell
# Daily startup routine:
git pull
npm install  # if package.json changed
Remove-Item -Recurse -Force .next  # if having issues
npm run dev
```

---

## 🆘 Emergency Recovery

If nothing works, nuclear option:
```powershell
# 1. Backup your source code
git add .
git commit -m "Backup before nuclear reset"

# 2. Complete reset
Remove-Item -Recurse -Force .next
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm cache clean --force

# 3. Fresh install
npm install
npm run dev
```

---

## 📞 When to Seek Help

Contact support if you see:
- Persistent module resolution errors after clean rebuild
- Memory or performance issues
- Deployment-specific errors
- Database connection issues
- Third-party integration failures

**Most issues (90%+) are resolved by cleaning the `.next` folder and restarting the development server.**
