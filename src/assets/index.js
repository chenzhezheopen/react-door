// export default (imgUrl) => require(imgUrl)

function getImg(imgName) {
  let ImgModule = require('./' + imgName).default
  return ImgModule
}

export default getImg