import { NextRequest, NextResponse } from 'next/server';
import { ai_sendMessage } from '@/integrations/openai';

/**
 * This should really be used as a server action with our current settup but useful
 * to show how the structure would look like with API routes.
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // add some kind of validation library here, zod?
    const { content, client_email } = await req.json();

    ai_sendMessage(content, client_email);

    return NextResponse.json({
      message: 'A representative will get back to you shortly.'
    });
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}
