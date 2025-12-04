import { useEffect, useMemo, useState } from 'react';
import basics from './JavaScript/01_basics';
import functionsScope from './JavaScript/02_functions_scope';
import typeConversion from './JavaScript/03_type_conversion_comparison';
import objectsPrototypes from './JavaScript/04_objects_prototypes';
import collections from './JavaScript/05_collections';
import modules from './JavaScript/06_modules';
import errorHandling from './JavaScript/07_error_handling';
import asyncSet from './JavaScript/08_async';
import browserApi from './JavaScript/09_browser_api';
import domEvents from './JavaScript/10_dom_events';
import debuggingQuality from './JavaScript/11_debugging_quality';
import './App.css';

const topics = [
  { id: 'basics', ...basics },
  { id: 'functions_scope', ...functionsScope },
  { id: 'type_conversion', ...typeConversion },
  { id: 'objects_prototypes', ...objectsPrototypes },
  { id: 'collections', ...collections },
  { id: 'modules', ...modules },
  { id: 'error_handling', ...errorHandling },
  { id: 'async', ...asyncSet },
  { id: 'browser_api', ...browserApi },
  { id: 'dom_events', ...domEvents },
  { id: 'debugging_quality', ...debuggingQuality },
];

const buildPool = (topicId) => {
  if (topicId === 'all') {
    return topics.flatMap((topic) =>
      topic.questions.map((question, index) => ({
        topicId: topic.id,
        topicTitle: topic.title,
        question,
        index,
      }))
    );
  }

  const topic = topics.find((t) => t.id === topicId);
  if (!topic) return [];
  return topic.questions.map((question, index) => ({
    topicId: topic.id,
    topicTitle: topic.title,
    question,
    index,
  }));
};

const pickRandom = (pool) => {
  if (!pool.length) return null;
  const idx = Math.floor(Math.random() * pool.length);
  return pool[idx];
};

function App() {
  const [topicId, setTopicId] = useState('all');
  const [current, setCurrent] = useState(null);
  const [history, setHistory] = useState([]);

  const pool = useMemo(() => buildPool(topicId), [topicId]);

  useEffect(() => {
    setCurrent(pickRandom(pool));
    setHistory([]);
  }, [pool]);

  const handleNext = () => {
    const next = pickRandom(pool);
    if (!next) {
      setCurrent(null);
      return;
    }
    setCurrent(next);
    setHistory((prev) => [next, ...prev].slice(0, 5));
  };

  const handleTopicChange = (event) => {
    setTopicId(event.target.value);
  };

  const currentNumber =
    current && current.index !== undefined ? current.index + 1 : null;

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">JavaScript 学習クイズ</p>
          <h1>ランダム出題で手を動かそう</h1>
          <p className="lede">
            READMEに沿った11トピック・各30問。カテゴリを選ぶか、全件からランダムで出題できます。
          </p>
        </div>
        <div className="meta">
          <div>
            <span className="meta-label">トピック数</span>
            <strong>{topics.length}</strong>
          </div>
          <div>
            <span className="meta-label">問題総数</span>
            <strong>{topics.length * 30}</strong>
          </div>
        </div>
      </header>

      <main className="grid">
        <section className="card">
          <div className="control-row">
            <label className="field">
              <span>出題範囲</span>
              <select value={topicId} onChange={handleTopicChange}>
                <option value="all">全トピック（330問）</option>
                {topics.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.title}（30問）
                  </option>
                ))}
              </select>
            </label>
            <button className="primary" onClick={handleNext}>
              次の問題をランダム出題
            </button>
          </div>

          {current ? (
            <div className="question">
              <p className="question-topic">{current.topicTitle}</p>
              <h2 className="question-title">
                {currentNumber ? `Q${currentNumber}. ` : ''} {current.question}
              </h2>
              <p className="question-hint">
                プロンプトを書き出して、手を動かして答えを考えてみましょう。
              </p>
            </div>
          ) : (
            <div className="question empty">問題が見つかりません。</div>
          )}
        </section>

        <aside className="card side">
          <h3>最近出た問題</h3>
          {history.length === 0 && <p className="muted">まだ履歴はありません。</p>}
          <ul className="history">
            {history.map((item, i) => (
              <li key={`${item.topicId}-${item.index}-${i}`}>
                <span className="pill">{item.topicTitle}</span>
                <span className="history-text">
                  {`Q${item.index + 1}. ${item.question}`}
                </span>
              </li>
            ))}
          </ul>
          <div className="stats">
            <div>
              <span className="meta-label">現在のプール</span>
              <strong>{pool.length}問</strong>
            </div>
            <div>
              <span className="meta-label">履歴保存</span>
              <strong>最新5問</strong>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
