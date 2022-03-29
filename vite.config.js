import path from 'path';

export default {
    // config options
    resolve: {
        alias: {
            '#components': path.join(__dirname, 'src', 'components'),
            '#views': path.join(__dirname, 'src', 'views'),
            '#assets': path.join(__dirname, 'src', 'assets'),
            '#theme': path.join(__dirname, 'src', 'theme'),
            '#variables': path.join(__dirname, 'src', 'variables'),
            '#routes': path.join(__dirname, 'src', 'routes')
        }
    }
}