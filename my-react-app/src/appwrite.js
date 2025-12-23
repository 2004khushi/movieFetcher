import {Client, Databases, Query, ID} from 'appwrite'

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject(PROJECT_ID)

const database = new Databases(client);


export const updateSearchCount = async (searchTerm, movie) => {
    console.log(DATABASE_ID, PROJECT_ID, COLLECTION_ID);


    //1. Use Appwrite SDK to check if the search term (the movie) already exists or not in the db

    try{
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal('searchTerm', searchTerm),
        ] )


        //2. If it does then simply just increase it's count.
        if(result.documents.length > 0 ){
            const doc = result.documents[0];

            await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
                count: doc.count + 1,
            })


            //3 if not ; create new one with that name and count as 1
        }else{
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm,
                count: 1,
                movie_id: movie.id,
                poster_url: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            })
        }

    }catch(e){
        console.log(`Error: ${e}`);
    }


}

//this fn is to be able to fetch top movies from the data
export const  getTrendingMovies = async () => {

    try{
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID,[
            Query.limit(5),
            Query.orderDesc("count")
        ])


        return result.documents;

    }catch(e){
        console.log(`Error: ${e}`);
    }
}
