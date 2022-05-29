import { recommendMusic,newMusic } from "./Home";
import {searchMusic,daySong} from './Search'
import { getSongById,getLyricById,getComment } from "./Play";
import { LoginMusic } from "./Login";
export const recommendMusicApi = recommendMusic;
export const newMusicApi = newMusic;
export const searchMusicApi = searchMusic;
export const daySongApi = daySong;
export const getSongByIdApi = getSongById;
export const getLyricByIdApi = getLyricById;
export const getCommentApi = getComment;
export const LoginMusicApi = LoginMusic;