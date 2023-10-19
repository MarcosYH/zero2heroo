export const compressImage = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const maxWidth = 800;
        const maxHeight = 600;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        // Obtenir le type d'image du fichier d'origine
        const fileType = file.type || "image/jpeg";

        // Convertir le canvas en blob avec le type d'image correct
        canvas.toBlob(
          (blob) => {
            resolve(new File([blob], file.name, { type: fileType }));
          },
          fileType,
          0.8
        );
      };
    };
  });
};
