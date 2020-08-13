import typescript from '@rollup/plugin-typescript'

export default {
    input: 'src/InitAppShellUMD.ts',
    output: {
        name: 'InitAppShellUMD',
        dir: 'dist',
        format: 'umd',
        sourcemap: 'inline',
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'app-shell': 'vnwAppShell'
        }
    },
    external: ['app-shell', 'react', 'react-dom'],
    plugins: [
        typescript({
            lib: ['es5', 'es6', 'dom'],
            target: 'es5',
            sourceMap: true,
            declaration: false,
            moduleResolution: 'node',
            jsx: 'react',
            rootDir: 'src'
        })
    ]
}
