export const algorithmDescriptions = {
  //sort
  bubbleSort: {
    header: "Bubble Sort",
    description:
      "Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
    steps: [
      "Start from the beginning of the list.",
      "Compare each pair of adjacent elements.,",
      "If the elements are in the wrong order, swap them.",
      "Repeat steps 1-3 until no swaps are needed, indicating that the list is sorted.",
    ],
    time_complexity: {
      best: "O(n) - When the list is already sorted.",
      average: " O(n^2) - When the elements are randomly ordered.",
      worst: "O(n^2) - When the elements are in reverse order.",
    },
    space_complexity: "O(1)",
  },
  insertionSort: {
    header: "Insertion Sort",
    description:
      "Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It iterates through the input elements and, at each iteration, it removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.",
    steps: [
      "Start from the second element (index 1) of the list.",
      "Compare the current element with the elements to its left.",
      "If the current element is smaller than the elements to its left, shift larger elements to the right to make space for the current element.",
      "Insert the current element into the correct position in the sorted portion of the list.",
      "Repeat steps 2-4 for each element in the list until the entire list is sorted.",
    ],
    time_complexity: {
      best: "O(n) - When the list is already sorted.",
      average: "O(n^2) - When the elements are randomly ordered.",
      worst: "O(n^2) - When the elements are in reverse order.",
    },
    space_complexity: "O(1)",
  },
  selectionSort: {
    header: "Selection Sort",
    description:
      "Selection sort is a simple sorting algorithm that divides the input list into two parts: a sorted subarray and an unsorted subarray. It repeatedly selects the smallest element from the unsorted subarray and moves it to the beginning of the sorted subarray.",
    steps: [
      "Initialize the index of the minimum element as the first element of the unsorted subarray.",
      "Iterate through the unsorted subarray, starting from the second element.",
      "Find the smallest element in the unsorted subarray.",
      "Swap the smallest element with the first element of the unsorted subarray.",
      "Move the boundary of the sorted subarray one element to the right.",
      "Repeat steps 2-5 until the entire array is sorted.",
    ],
    time_complexity: {
      best: "O(n^2) - Regardless of input.",
      average: "O(n^2) - Regardless of input.",
      worst: "O(n^2) - Regardless of input.",
    },
    space_complexity: "O(1)",
  },

  //search
  linearSearch: {
    header: "Linear Search",
    description:
      "Linear search is a simple search algorithm that sequentially checks each element in a list or array until the target element is found or the entire list has been traversed. It compares each element of the list with the target element to determine if they are equal.",
    steps: [
      "Start from the beginning of the list.",
      "Compare the target element with each element of the list sequentially.",
      "If the target element matches an element in the list, return the index of that element.",
      "If the target element is not found after checking all elements, return a special value (e.g., -1) to indicate that the element is not in the list.",
    ],
    time_complexity: {
      best: "O(1) - When the target element is found at the beginning of the list.",
      average: "O(n) - When the target element is randomly located in the list.",
      worst: "O(n) - When the target element is at the end of the list or not present in the list.",
    },
    space_complexity: "O(1)",
  },
  binarySearch: {
    header: "Binary Search",
    description:
      "Binary search is an efficient search algorithm that works on sorted lists or arrays. It repeatedly divides the search interval in half, comparing the target element to the middle element of the interval. Depending on the comparison, it either narrows down the search to the left or right half of the interval.",
    steps: [
      "Start with the entire list as the search interval.",
      "Calculate the middle index of the current search interval.",
      "Compare the target element with the middle element of the interval.",
      "If the target element is equal to the middle element, return the index of the middle element.",
      "If the target element is less than the middle element, narrow the search interval to the left half.",
      "If the target element is greater than the middle element, narrow the search interval to the right half.",
      "Repeat steps 2-6 until the target element is found or the search interval is empty.",
      "If the search interval is empty and the target element has not been found, return a special value (e.g., -1) to indicate that the element is not in the list.",
    ],
    time_complexity: {
      best: "O(1) - When the target element is at the middle of the list.",
      average: "O(log n) - When the search interval is repeatedly halved.",
      worst: "O(log n) - When the search interval is repeatedly halved.",
    },
    space_complexity: "O(1)",
  },
  ternarySearch: {
    header: "Ternary Search",
    description:
      "Ternary search is a divide-and-conquer algorithm that is used to find the position of a target value within a sorted array. It is an extension of the binary search algorithm, dividing the search space into three parts instead of two. Ternary search works by recursively dividing the search interval into three parts and comparing the target value with the elements at two partition points. Depending on the comparison, it narrows down the search to one-third of the interval.",
    steps: [
      "Start with the entire sorted list as the search interval.",
      "Calculate two midpoints (mid1 and mid2) dividing the search interval into three equal parts.",
      "Compare the target element with the elements at mid1 and mid2.",
      "If the target element is equal to any of the midpoints, return the index of the midpoint.",
      "If the target element is less than the element at mid1, narrow the search interval to the first third.",
      "If the target element is greater than the element at mid2, narrow the search interval to the last third.",
      "If the target element is between the elements at mid1 and mid2, narrow the search interval to the middle third.",
      "Repeat steps 2-7 until the target element is found or the search interval is empty.",
      "If the search interval is empty and the target element has not been found, return a special value (e.g., -1) to indicate that the element is not in the list.",
    ],
    time_complexity: {
      best: "O(1) - When the target element is at one of the midpoints.",
      average: "O(log n) - When the search interval is repeatedly divided into three parts.",
      worst: "O(log n) - When the search interval is repeatedly divided into three parts.",
    },
    space_complexity: "O(1)",
  },
};
