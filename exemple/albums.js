global.fetch('node-fetch');
import { seachAlbums } from '../src/main';
const albums = seachAlbums('Incubus');
albums.then(data => data.albums.items.map(item => console.log(item.name)));
