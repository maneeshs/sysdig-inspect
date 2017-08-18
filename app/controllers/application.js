import Ember from 'ember';
import config from '../appConfig';

export default Ember.Controller.extend({
    captureFilePath: null,

    openFile() {
        if (config.isElectron()) {
            let fileNames = config.openFileDialog();

            if (Ember.isEmpty(fileNames) === false) {
                this.transitionToRoute('capture', fileNames[0]);
            } else {
                console.log('Not file choosen.');
            }
        } else {
            console.error('Cannot open file with web interface.');
        }
    },

    actions: {
        openFile() {
            this.openFile();
        },
    },
});
