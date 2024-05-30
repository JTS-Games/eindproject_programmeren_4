import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Block: new ImageSource('images/block.jpg'),
    Car: new ImageSource('images/car.png'),
    Coin: new ImageSource('images/coin.png')
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }