import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import path from 'path';
import slugify from 'slugify';
const articlesDirectory = path.join(process.cwd(), 'src', 'markdown');

export function getAllArticles() {
  const fileNames = fs.readdirSync(articlesDirectory);

  return fileNames.map((fileName) => {
    const filePath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const title = data.title || fileName.replace(/\.md$/, '');
    const slug = slugify(title, { lower: true });

    return {
      slug,
      title,
      date: data.date || null, // Ensure date is explicitly set
      image: data.featuredImage || null, // Include image property
      ...data,
      content,
    };
  });
}

export function getArticleBySlug(slug: string) {
  const allFiles = fs.readdirSync(articlesDirectory);

  const matchedFile = allFiles.find((file) => {
    const raw = fs.readFileSync(path.join(articlesDirectory, file), 'utf8');
    const { data } = matter(raw);
    const title = data.title || file.replace(/\.md$/, '');
    const currentSlug = slugify(title, { lower: true });
    return currentSlug === slug;
  });

  if (!matchedFile) return null;

  const filePath = path.join(articlesDirectory, matchedFile);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const htmlContent = marked.parse(content); // 👈 convert markdown to HTML

  return {
    slug,
    title: data.title || matchedFile.replace(/\.md$/, ''),
    date: data.date || null,
    image: data.featuredImage || null,
    ...data,
    content: htmlContent, // 👈 return HTML content
  };
}

export function getLatestArticles(limit = 3) {
  const articles = getAllArticles();

  return articles
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, limit)
    .map((article) => ({
      title: article.title,
      link: `/articles/${article.slug}`,
      date: article.date,
      image: article.image || null,
    }));
}
