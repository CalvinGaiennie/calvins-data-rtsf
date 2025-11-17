-- ========================================
-- KNOWLEDGE GARDEN: SQL SCHEMA (v1.0)
-- Everything is a Note. Every link is a row.
-- ========================================

-- 1. NOTES: Every quote, essay, list, idea
CREATE TABLE notes (
    id         BIGSERIAL PRIMARY KEY,
    slug       TEXT UNIQUE NOT NULL,           -- /note/why-i-love-naval
    title      TEXT NOT NULL,
    content    TEXT NOT NULL,                  -- Markdown + [[wikilinks]] + {{include:slug}}
    type       TEXT NOT NULL,                  -- essay, quote, list, idea, etc.
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now(),
    is_public  BOOLEAN DEFAULT true,
    metadata   JSONB DEFAULT '{}'::jsonb      -- flexible: { "rating": 5 }
);

-- 2. PEOPLE: Authors, teachers, podcast guests
CREATE TABLE people (
    id         BIGSERIAL PRIMARY KEY,
    slug       TEXT UNIQUE NOT NULL,           -- /person/naval-ravikant
    name       TEXT NOT NULL,
    bio        TEXT,
    website    TEXT,
    twitter    TEXT
);

-- 3. TAGS: #stoicism, #wealth
CREATE TABLE tags (
    id   BIGSERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL                  -- "#inversion"
);
CREATE TABLE note_tags (
    note_id BIGINT REFERENCES notes(id) ON DELETE CASCADE,
    tag_id  BIGINT REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (note_id, tag_id)
);

-- 4. LINKS: [[Note]] or {{include:slug}} → DB row
CREATE TABLE links (
    from_note_id BIGINT REFERENCES notes(id) ON DELETE CASCADE,
    to_note_id   BIGINT REFERENCES notes(id) ON DELETE SET NULL,
    to_person_id BIGINT REFERENCES people(id) ON DELETE SET NULL,
    relationship_type TEXT DEFAULT 'wikilink',    -- wikilink, includes, parent
    context      TEXT,
    CONSTRAINT one_target CHECK (
        (to_note_id IS NOT NULL AND to_person_id IS NULL) OR
        (to_note_id IS NULL AND to_person_id IS NOT NULL)
    ),
    PRIMARY KEY (from_note_id, to_note_id, to_person_id)
);

-- 5. ASSETS: Images, PDFs
CREATE TABLE assets (
    id          BIGSERIAL PRIMARY KEY,
    note_id     BIGINT REFERENCES notes(id) ON DELETE CASCADE,
    filename    TEXT NOT NULL,
    mime_type   TEXT,
    storage_key TEXT NOT NULL
);

-- ========================================
-- INDEXES: Fast search, backlinks, tags
-- ========================================
CREATE INDEX idx_notes_slug       ON notes(slug);
CREATE INDEX idx_notes_type       ON notes(type);
CREATE INDEX idx_notes_public     ON notes(is_public);
CREATE INDEX idx_notes_created    ON notes(created_at DESC);
CREATE INDEX idx_notes_fts        ON notes USING GIN(to_tsvector('english', content || ' ' || title));

CREATE INDEX idx_people_slug      ON people(slug);
CREATE INDEX idx_note_tags_tag    ON note_tags(tag_id);
CREATE INDEX idx_links_to_note    ON the links(to_note_id) WHERE to_note_id IS NOT NULL;
CREATE INDEX idx_links_to_person  ON links(to_person_id) WHERE to_person_id IS NOT NULL;