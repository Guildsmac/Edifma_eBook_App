import {PermissionsAndroid} from "react-native";
import RNFetchBlob from "rn-fetch-blob";

function download(url, filename){
    const dirs = RNFetchBlob.fs.dirs;
    RNFetchBlob
        .config({
            trusty: true,
            addAndroidDownloads: {
                path: dirs.DownloadDir + '/' + filename,
                useDownloadManager: true,
                notification:true,
                fileCache:true,
                mime:'application/epub+zip',
                description:'eBook produzido pela EdIFMA'
            }
        })
        .fetch('GET', url)
        .progress({count:1}, (received, total) => {
            console.log('progress' + (received/total));
        })
        .then((resp) => {
            alert('Arquivo baixado!(' + resp.path() + ')');

        })
}

async function requestStoragePermission(){
    try{
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                'title':'Permissão para acessar cartão SD',
                'message':'O leitor de eBooks do IFMA precisa da sua permissão para salvar arquivos no seu cartão SD ;)'

            }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    }catch(err){
        console.log(err);
        return false;

    }
}

export{requestStoragePermission, download};