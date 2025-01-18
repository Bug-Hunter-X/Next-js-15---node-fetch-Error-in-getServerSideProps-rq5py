```javascript
// pages/about.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  const res = await fetch('https://api.example.com/data');
  if (!res.ok) {
    return NextResponse.json({ message: 'Error fetching data' }, { status: res.status });
  }
  const data = await res.json();
  return NextResponse.json({ data });
}
```