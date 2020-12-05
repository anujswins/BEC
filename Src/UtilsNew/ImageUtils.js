import ImagePicker from 'react-native-image-crop-picker';


class ImageUtils {

    static async selectImageFromDevice() {
        return ImagePicker.openPicker({
            width: 500,
            height: 500,
            cropping: true,
        }).then(image => {
            return image;
        });

    }

    static async captureImagefromCamera() {
        return ImagePicker.openCamera({
            width: 500,
            height: 500,
            cropping: true,
        }).then(image => {
            return image;
        });

    }


}

export default ImageUtils;
