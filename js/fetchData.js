export async function fetchData() {
  const url =
    "https://script.google.com/macros/s/AKfycbzN_moOhPJ3aaLufK9-IDPPYGEgy6PGhij6etrudMJKCexnCJgrhmNvHdrCbUIbm5j4/exec";
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
}
