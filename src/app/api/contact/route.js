import Contact from "@/models/contact_model";
import {NextResponse} from "next/server";
import dbConnect from "@/utils/dbConn";

export async function POST(req, res) {
    try {

        const body = await req.json();
        await dbConnect();

        await Contact.create(body);

        return NextResponse.json({
            message:"Message sent successfully!"
        }, {
            status: 200
        })

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}