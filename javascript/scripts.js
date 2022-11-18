function enablePhotoUpload(){
    const imageInput = document.querySelector("#image-input")

    imageInput.addEventListener("change", function(){
        const reader = new FileReader()

        reader.addEventListener("load", () => {
            const uploadImage = reader.result

            changeMemePicture(uploadImage)
        })

        reader.readAsDataURL(this.files[0])
    })
}

async function mapImageList(){
    const memeObject = [
    {
        "name": "Chapolin",
        "path": "imagens/chapolin.jpg"
    },
    {
        "name": "Chloe",
        "path": "imagens/chloe.jpg"
    }, 
    {
        "name": "funny-cat1",
        "path": "imagens/funny-cat1.jpg"
    },
    {
        "name": "funny-cat2",
        "path": "imagens/funny-cat2.jpg"
    },
]
return memeObject
}

async function creatGallery(imagemList){
    const memeSelctor = document.querySelector("#memes-list")

    imagemList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelctor.appendChild(newOption)
    });
}

async function changeMemePicture(photo){
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url('${photo}')`
}

async function main(){
    const memeImageList = await mapImageList()

    enablePhotoUpload()
    await creatGallery(memeImageList)
    await changeMemePicture(memeImageList[1].path)
}


main()