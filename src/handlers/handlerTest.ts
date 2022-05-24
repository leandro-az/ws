import 'source-map-support/register';

export async function helloWord(event: any, context: any, callback: any) {
    console.log(event+context+callback);
    const result = { nome: 'Teste deploy automático' };

    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(result),
        isBase64Encoded: false
    };
    return response;
}
