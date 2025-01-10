import { useEffect, useRef, useState } from 'react';
import { Button } from 'rizzui';
import cn from '@core/utils/class-names';
import { useFilterControls } from '@core/hooks/use-filter-control';
import { initialState } from '@/app/shared/point-of-sale/pos-category-utils';
import { useElementRePosition } from '@core/hooks/use-element-reposition';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useAtom } from 'jotai';
import { selectedCategoryAtom } from './pos-category-filters';
import { usePlans, useFilteredPlans } from '@/app/api/plan/usePlan';

function getIndexByValue(arr: any[], value: string) {
  return arr.findIndex((item) => item.value === value);
}

export default function POSProductCategory() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useAtom(selectedCategoryAtom);
  const { state, applyFilter, reset } = useFilterControls<
    typeof initialState,
    any
  >(initialState);
  const { isScrollableToLeft, isScrollableToRight } = useElementRePosition({
    ref,
    activeTab: activeIndex,
  });

  const { data: categories, isLoading } = useFilteredPlans();

  function handleReset(i: number) {
    reset();
    setActiveIndex(i);
    setSelectedCategory(null);
  }

  function handleFilter(value: string, i: number) {
    applyFilter('filter', value);
    setActiveIndex(i);
    setSelectedCategory(value);
  }

  useEffect(() => {
    if (!state) {
      setActiveIndex(0);
    } else if (categories) {
      setActiveIndex(getIndexByValue(categories, state['filter']) + 1);
    }
  }, [state, categories]);

  if (isLoading) {
    return <p>Loading categories...</p>;
  }

  return (
    <>
      <div
        ref={ref}
        className="flex w-full items-center gap-2.5 overflow-x-auto pb-[2px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <Button
          onClick={() => handleReset(0)}
          variant={state['filter'] ? 'outline' : 'solid'}
          className={cn('z-1 relative flex shrink-0 gap-1.5')}
        >
          All Items
        </Button>
        {categories?.map((category, idx) => (
          <Button
            key={category.duration}
            variant={
              state['filter'] === category.duration ? 'solid' : 'outline'
            }
            className={cn(
              'inline-flex shrink-0 gap-1.5 scroll-smooth focus-visible:border-0 focus-visible:ring-0 active:ring-0 focus-visible:enabled:border-0',
              state['filter'] === category.duration && 'relative z-10'
            )}
            onClick={() => handleFilter(category.duration, idx + 1)}
          >
            <span>{category.duration}</span>
          </Button>
        ))}
      </div>

      <span
        className={cn(
          'invisible absolute start-0 top-0 z-[2] h-full w-10 bg-gradient-to-r from-gray-0 via-gray-0/70 to-transparent opacity-0 duration-200 dark:from-gray-50 dark:via-gray-50/70 rtl:bg-gradient-to-l',
          isScrollableToLeft && 'visible opacity-100'
        )}
      />
      <span
        className={cn(
          'invisible absolute end-0 top-0 z-[2] h-full w-10 bg-gradient-to-l from-gray-0 via-gray-0/70 to-transparent opacity-0 duration-200 dark:from-gray-50 dark:via-gray-50/70 rtl:bg-gradient-to-r',
          isScrollableToRight && 'visible opacity-100'
        )}
      />
    </>
  );
}
