import {Container, Menu, MenuButton} from "./styles"
import {useEffect} from "react"
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import FavoriteIcon from '../../assets/favorites.png';
import PlaylistIcon from '../../assets/playlists.png';
import MusicIcon from '../../assets/musics.png';



export function LeftSideMenu() {

    const handle = useFullScreenHandle();

    useEffect(() => {
        // handle.enter();
    }, []);

    async function getFiles(path: string){
    }

    return (
        <Container>
            <MenuButton onClick={() => getFiles("D:")}>|||</MenuButton>

            <Menu>

                <li className="off"><img src={MusicIcon}  alt="Musics image"/><a>Musics</a></li>
                <li className="off"><img src={PlaylistIcon}  alt="Playlists image"/><a>Playlists</a></li>
                <li className="off"><img src={FavoriteIcon}  alt="Favorites image"/><a>Favorites</a></li>
                <div>
                    <button onClick={handle.enter}>
                        Enter fullscreen
                    </button>

                    <FullScreen handle={handle}>
                        Any fullscreen content here
                    </FullScreen>
                </div>

            </Menu>
        </Container>
    )
}