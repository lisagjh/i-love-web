---

title: "Font Performance Strategies"

date: 2024-11-14

description: "Mandy Michael at Performance.Now() - a talk about web font optimization"

tags: ["S16", "talk", "workflow"]

---

On November 14 and 15, 2024, I got to attend Performance.Now(), a web performance conference in Amsterdam.

I didn't understand many of the talks, but the one I understood the most of is also my favourite; web font optimization.
# Font Performance Strategies: Getting Fonts Just Right  

Mandy explained several strategies to optimize web fonts effectively, using her own website as an example. She managed to reduce its size from 1500kb to around 400kb. Here’s how she did it:  

- **System fonts** are the fastest option, but custom fonts are often essential for branding and style.  
- Most websites (about 70%) use a mix of **third-party hosting** (like Google Fonts) and **self-hosting**. While using Google Fonts is simple, self-hosting provides better performance.  
- Only download the fonts you need. Many websites waste bandwidth by loading redundant fonts.  
- Use **variable fonts** when possible. These combine different weights and styles into a single file, making them more efficient. However, if you’re only using one weight, stick with a standard font file instead.  
- Reduce the size of your font files. The best format is **WOFF2**, which is highly compressed and modern. For older browsers that don’t support WOFF2, you can fall back to system fonts instead of older font formats.  
- Optimize your fonts with tools designed for reducing size and improving performance.  
- **Subset your fonts** to include only the characters your site needs—but always check your license before doing this.  
- Use the **font-display property** to control how fonts load:  
  - `font-display: optional` gives the best performance but might not suit your design.  
  - `font-display: swap` ensures your design stays consistent but can cause layout shifts.  
  - A combination of both properties often works best, especially if you prioritize certain fonts over others.  
- Prevent **layout shifts (CLS)** when swapping fonts by using CSS properties like `size-adjust` and `font-size-adjust` to better match system and web fonts.  
- Cache your fonts carefully for faster load times.  
- Consider **inlining your font CSS**, but use this sparingly.  
- Use **preload** for WOFF2 fonts and **preconnect** to third-party font providers. If you’re doing this, make sure to use the `crossorigin` attribute and thoroughly test your implementation.  



Mandy shared [this collection of font performance resources](https://github.com/mandymichael/font-performance-resources/blob/main/README.md) to help you get started!


---

If you would like to read more summaries of the talks, I recommend [Stuart McMillan's site](https://stuart-mcmillan.com/blog/webperf/perfnow2024.html#mandy).