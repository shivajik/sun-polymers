
# SEO Enhancement for Clients Page

## Overview
Add missing SEO elements to the Clients page to ensure consistency with other pages (About, Contact, Products) and improve search engine visibility.

## What Will Be Added

### 1. Canonical URL
Prevents duplicate content issues by specifying the preferred URL:
```
https://sunpolymers.in/clients
```

### 2. Keywords Meta Tag
Target keywords for the clients/portfolio page:
- Sun Polymers clients
- plastic moulding clients India
- manufacturing partners
- trusted plastic manufacturer

### 3. Geo Tags for Local SEO
Location-based tags matching other pages:
- Region: IN-MH (India - Maharashtra)
- Place: Jalna
- GPS Coordinates: 19.8347, 75.8816

### 4. Enhanced Open Graph Tags
Complete social sharing metadata:
- og:url pointing to clients page
- og:image using the existing og-image.jpg

### 5. BreadcrumbList Schema
Structured data for search engine rich snippets:
- Home > Clients navigation path

## File to Modify
- `src/pages/Clients.tsx`

## Technical Details

The Helmet section will be updated to include:
- Canonical link tag
- Keywords meta tag
- 4 geo meta tags (geo.region, geo.placename, geo.position, ICBM)
- og:url and og:image meta tags
- JSON-LD script with BreadcrumbList schema

This matches the SEO pattern used in About, Contact, and Products pages for consistency across the site.
