import { useState } from "react";

export const DragArea = () => {
    const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null);
    const changeImage = (e) => {
        console.log(e.target.files);
        if (e.target.files[0] !== undefined) {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                e.preventDefault();
                setImageSelectedPrevious(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
            };
        }
    };
    return (
        <div className="containerDrag">
            <br />
            <div className="image-upload-wrap">
                <input
                    className="file-upload-input"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => {
                        changeImage(e);
                    }}
                />
                <div className="text-information">
                    <h3>Arrastre o seleccione archivos</h3>
                </div>
            </div>

            <div className="center">
                <img
                    src={ImageSelectedPrevious}
                    alt=""
                    height="120px"
                    width="200px"
                />
            </div>
        </div>
    );
}
