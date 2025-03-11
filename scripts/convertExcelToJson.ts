import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

// تحديد مسار ملف Excel
const excelFilePath = path.join(__dirname, '../src/data/books.xlsx');
const outputFilePath = path.join(__dirname, '../src/data/books.ts');

// تحميل ملف Excel
const workbook = XLSX.readFile(excelFilePath);
const sheetName = workbook.SheetNames[0]; // استخدام أول شيت
const sheet = workbook.Sheets[sheetName];

// تحويل البيانات إلى JSON
const booksJson = XLSX.utils.sheet_to_json(sheet);

// إنشاء ملف TypeScript
const tsContent = `export const books = ${JSON.stringify(booksJson, null, 2)};`;

// حفظ الملف
fs.writeFileSync(outputFilePath, tsContent);

console.log('✅ تم تحويل البيانات من Excel إلى books.ts بنجاح!');
