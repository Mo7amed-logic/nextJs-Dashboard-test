import {Inter,Amiri_Quran} from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const amiri = Amiri_Quran({subsets:["arabic"],weight:"400"});
export const inter = Inter({subsets:["latin"]});
export const lusitana = Lusitana({subsets:["latin"],weight:['400']})