import v2 from "cloudinary"
import { CloudinaryStorage , multer} from "multer-storage-cloudinary"

v2.config({
    cloud_name: "",
    api_key: "",
    api_secret: "",
})

const storage = new CloudinaryStorage({
    v2,
    params:{
        folder: "hospitalRosales",
        allowed_format: ["jpg", "png", "jpg", "webp", "svg"]
    }
})

export const upload = multer({storage})