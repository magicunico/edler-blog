import { createBrowser, createReportWithBrowser } from "./lighthouse";
import fs from "fs";
import Assert from "assert";


    (async()=>{
        const browser = await createBrowser();
        const result = await createReportWithBrowser(
            browser, 
            "http://localhost:3000",
            {
                output:"html"
            }
        );

        Assert(result.report, "No report returned");

        fs.writeFileSync("reportWithHydrationTable4.html", result.report, "utf-8");

        await browser.close();

    })()
    .catch(console.error)
    .then(()=>{console.log("Finished! ")});