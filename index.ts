import { fetch } from "undici";

export default async function updatePatCount(name: string, numPats?: number, resp?: string, cook?: string) {
    if (!name) throw new Error("Please provide an username.");
    const f = await fetch("https://sushicat.rocks/api/pat", {
        method: "POST",
        body: JSON.stringify({
            "name": name,
            "pats": numPats ?? 1,
            "response": "03AGdBq26dGVBNwrCfEqVMq5gsY6Q6hv4jIha3Rzxezto8qIeC9nS5p7H6c8NcofJJd5GEb6iLDcWrWWIS7As40DiosAkK-fIzFYZ9VbhGElRRFYodeqCOBDztqbS5vv_PebzDxnVo8-9bvCVxOU4aNFawMuXOrOHxLBLsCiISB8wfb8biAfqU8tHjxjmAjQDOs-J0ukuPUcLj1VMfpUWRLLW8aS14MUuTQh_yEOr2PzJz7wY1zsH3kcJAGEhYZS6IEgdgdWuRXx3xlJpdBvKtc76eDd2AsrY_OIUUMPyBH-W5VYJKjtKdfUww7QZBVWZKeovqMrM-qMc19iPYtSpUztzYBh2BGwd8xktBoimuTE_5Rd3gHvH41u6BG1-3ibbkcrux2ljFWuFPnsdng9yepe2E9_Re92jQCr_JW9cr6rjLZm6_0A9flyrDCbzUUjiop5SULqAvRVexptuVJiVCS_fcsMftXGM_FKA1QsSFyDHlCgU0m-LN1H0lhTX-UIKvzs36dBsoli0B",
        }),
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.43",
            "Cookie": cook ?? "connect.sid=s:6WqNLc-FLxzrGp0JCojRwUn4xwcEUkgd.1l8chEBij/KARxCLu0214y9LZzWLDSA/ib9B5MBKtkA",
        },
    });
    if (await f.status !== 200) return new RangeError("Something went wrong while sending data to sushi.rocks");
    return await f.json();
}
