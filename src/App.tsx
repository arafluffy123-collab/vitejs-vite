export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'www' // Essential for Capacitor to find your build files
  }
})
