import { CategoryItem, CategoryListResponse } from '@/types/category';

export async function GET(): Promise<Response> {
  const data: CategoryItem[] = [
    {
      id: '1',
      name: '추천',
      slug: 'recommendation',
    },
    {
      id: '2',
      name: '기획전',
      slug: 'event',
    },
    {
      id: '3',
      name: '컴퓨터/IT',
      slug: 'view-category-300',
    },
    {
      id: '4',
      name: '자기계발',
      slug: 'view-category-400',
    },
    {
      id: '5',
      name: '경영/경제',
      slug: 'view-category-500',
    },
    {
      id: '6',
      name: '소설',
      slug: 'view-category-600',
    },
    {
      id: '7',
      name: '인문/사회/역사',
      slug: 'view-category-700',
    },
  ];

  const body: CategoryListResponse = {
    data: {
      categories: data,
    },
  };

  return Response.json(body);
}
