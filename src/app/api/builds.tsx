import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from "../lib/mongodb"

export default async function builds (req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET'){
        try{
            const client = await clientPromise;
            const db = client.db("StormCloud")
    
            const builds = await db
                .collection("builds")
                .find({})
                .sort({})
                .toArray();
            
            res.json(builds);
        } catch (e){
            console.error(e);
        }
    }
    
}