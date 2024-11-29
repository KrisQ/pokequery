# Pokédex with React Query

A Pokédex application demonstrating optimistic data fetching patterns using React Query (TanStack Query). This project showcases several advanced data fetching techniques:

## Key Features

- **Optimistic Updates**: Uses React Query's `placeholderData` to show cached results while fetching new data
- **Prefetching**: Implements two levels of prefetching:
  - Next page of Pokemon list is prefetched when viewing current page
  - Individual Pokemon details are prefetched on hover
- **Infinite Scroll**: Paginated list of Pokemon with smooth transitions between pages
- **Smooth UI**: Tailwind CSS styling with loading states and transitions

## Technical Highlights

- Built with React + TypeScript + Vite
- Uses TanStack Query (React Query) for data management
- Demonstrates advanced React Query patterns:
  - Custom hooks for data fetching (`usePokemonList`, `usePokemonDetail`)
  - Optimistic updates using `placeholderData`
  - Strategic prefetching for improved UX
  - Infinite stale time for list data
  - Shorter stale time (10s) for individual Pokemon details

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Learn More

This project demonstrates best practices for data fetching in React applications:
- How to implement optimistic updates
- Effective prefetching strategies
- Managing cache invalidation
- Handling loading and error states
