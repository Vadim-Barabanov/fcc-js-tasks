// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
    let newStr = str;

    switch (true) {
        case str.includes("<>"):
            newStr = str.replace(/<>/, "&lt;&gt;");
            break;
        case str.includes("&"):
            newStr = str.replace(/[&]/g, "&amp;");
            break;
        case str.includes("<"):
            newStr = str.replace(/[<]/g, "&lt;");
            break;
        case str.includes(">"):
            newStr = str.replace(/[>]/g, "&gt;");
            break;
        case str.includes('"'):
            newStr = str.replace(/["]/g, "&quot;");
            break;
        case str.includes("'"):
            newStr = str.replace(/[']/g, "&apos;");
            break;
    }

    console.log(newStr);
    return newStr;
}

convertHTML("Dolce & Gabbana"); // should return "Dolce &amp; Gabbana".
convertHTML("Hamburgers < Pizza < Tacos"); // should return "Hamburgers &lt; Pizza &lt; Tacos".
convertHTML("Sixty > twelve"); // should return "Sixty &gt; twelve".
convertHTML('Stuff in "quotation marks"'); // should return "Stuff in &quot;quotation marks&quot;".
convertHTML("Schindler's List"); // should return "Schindler&apos;s List".
convertHTML("<>"); // should return "&lt;&gt;".
convertHTML("abc"); // should return "abc".
