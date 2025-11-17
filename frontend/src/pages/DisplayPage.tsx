import { useEffect, useState } from "react";
import { data } from "../FakeData.ts"
import type { Quote } from "../FakeData.ts"

function DisplayPage() {
  const [people, setPeople] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPerson, setSelectedPerson] = useState("")
  const [filteredData, setFilteredData] = useState<Quote[]>([])

  // ──────────────────────────────────────────────────────────────
  // Build unique people list (author + attribution) – no duplicates
  // ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const peopleMap = new Map<string, string>(); // normalized → original

    const normalize = (name: string): string =>
      name
        .toLowerCase()
        .replace(/\s+/g, " ")
        .replace(/[^\w\s]/g, "")
        .trim();

    const addPerson = (name: string) => {
      if (!name) return;
      const key = normalize(name);
      if (!peopleMap.has(key)) {
        peopleMap.set(key, name.trim());
      }
    };

    data.forEach((item) => {
      addPerson(item.author);
      if (item.attribution) addPerson(item.attribution);
    });

    const unique = Array.from(peopleMap.values());
    setPeople(unique);
  }, [data]);

  useEffect(() => {
    const categoriesMap = new Map<string, string> ();
    const normalize = (name: string) : string =>
      name
        .toLowerCase()
        .replace(/\s+/g, " ")
        .replace(/[^\w\s]/g, "")
        .trim();
    const addCategory = (category: string) => {
      if (!category) return;
      const key = normalize(category);
      if (!categoriesMap.has(key)) {
        categoriesMap.set(key, category.trim());
      }
    };
    data.forEach((item) => {
      if (item.category) addCategory(item.category)
    })
    const unique = Array.from(categoriesMap.values());
    setCategories(unique)
  }, [data]);


  useEffect(() => {
    const selectedPersonsQuotes = data.filter(quote => quote.author === selectedPerson || quote.attribution === selectedPerson)

    if (selectedPerson == "") {
      setFilteredData(data);
    } else {
      setFilteredData(selectedPersonsQuotes);
    }
  }, [selectedPerson, data]);

  useEffect(() => {
    const selectedCategoriesQuotes = data.filter(quote => quote.category === selectedCategory)

    if (selectedCategory == "") {
      setFilteredData(data);
    } else {
      setFilteredData(selectedCategoriesQuotes)
    }
  }, [selectedCategory, data]);

  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>
        My Quotes & Ideas
      </h2>
      <div className="d-flex gap-5">
        <div>
          <h4>People</h4>
          <select 
            value={selectedPerson}
            onChange={(e) => setSelectedPerson(e.target.value)}
            >
            <option value=""></option>
            {people.map((person) => (
              <option value={person}>{person}</option>
            ))}
          </select>
        </div>
        <div>
          <h4>Categories</h4>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value=""></option>
              {categories.map((category) => (
                <option value={category}>{category}</option>
              ))}
            </select>
        </div>
      </div>

      {filteredData.map((idea, idx) => (
        <div
          key={idx}
          style={{
            marginBottom: "1.5rem",
            padding: "1rem",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            backgroundColor: "#fafafa",
          }}
        >
          <p>
            <strong>Quote / Idea:</strong> {idea.data}
          </p>

          {idea.description && (
            <p>
              <strong>Description:</strong> {idea.description}
            </p>
          )}

          <p>
            <strong>Author:</strong> {idea.author}
          </p>

          {idea.attribution && (
            <p>
              <strong>Attributed to:</strong> {idea.attribution}
            </p>
          )}

          {idea.my_reference && (
            <p>
              <strong>Citation:</strong> {idea.my_reference}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default DisplayPage;