
import { prisma } from "$lib/server/prisma";

const load = async() => {

    let coders;
    
    try {
        
        coders = await prisma.code_profiles.findMany({ include: { posts: true }});

    } catch (err) {
        console.error(err);
    }

    return { coders }
}

export { load }