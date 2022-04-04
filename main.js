(() => {
  var e = {
      28: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => i });
        var r = n(81),
          o = n.n(r),
          a = n(645),
          s = n.n(a)()(o());
        s.push([
          e.id,
          ":root {\n  --main-bg-color: #041c32;\n  --secondary-bg-color: #04293a;\n  --third-bg-color: #064663;\n  --fourth-bg-color: #ecb365;\n\n  --high-priority-color: red;\n  --medium-priority-color: yellow;\n  --low-priority-color: green;\n\n  --main-text-color: #ffffff;\n\n  --title-font-family: Raleway, sans-serif;\n  --sidebar-font-family: Poppins, sans-serif;\n  --task-font-family: var(--title-font-family);\n}\n\nbody {\n  margin: 0;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 0.3fr 0.7fr;\n  grid-template-rows: 0.2fr 0.8fr;\n  grid-template-areas:\n    'TITLE TITLE'\n    'SIDEBAR MAIN';\n}\n\n#header {\n  grid-area: TITLE;\n\n  background-color: var(--main-bg-color);\n  color: var(--main-text-color);\n\n  text-align: center;\n  font-family: var(--title-font-family);\n}\n\n#sidebar {\n  grid-area: SIDEBAR;\n\n  background-color: var(--secondary-bg-color);\n  color: var(--main-text-color);\n  font-family: var(--sidebar-font-family);\n  font-size: 1.25rem;\n\n  height: 100vh;\n}\n\n#nav {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n\n  padding: 1rem;\n}\n\n#nav > ul,\n#nav > ul > li > ul {\n  padding: 0;\n  list-style-type: none;\n  margin: 0;\n}\n\n#nav li {\n  padding-left: 1rem;\n}\n\n#add-project {\n  width: 100%;\n  height: 2rem;\n\n  background-color: transparent;\n  border: 2px solid white;\n\n  cursor: pointer;\n\n  color: var(--main-text-color);\n  font-size: 2rem;\n\n  display: grid;\n  justify-content: center;\n  align-content: center;\n\n  margin: 1rem 0;\n}\n\n#add-project:hover {\n  background-color: white;\n  color: var(--secondary-bg-color);\n}\n\n#main {\n  grid-area: MAIN;\n  padding: 1rem;\n}\n\n.task,\n.task-info,\n.task-buttons {\n  display: flex;\n  align-items: center;\n}\n\n.task {\n  justify-content: space-between;\n}\n\n.task-info {\n  gap: 0.5rem;\n\n  font-family: var(--task-font-family);\n}\n\n.task-buttons > img {\n  cursor: pointer;\n}\n\n.right-task-div {\n  display: flex;\n  gap: 2rem;\n}\n\n#add-task {\n  border: none;\n  cursor: pointer;\n\n  position: fixed;\n  width: 60px;\n  height: 60px;\n  bottom: 40px;\n  right: 40px;\n\n  background-color: var(--secondary-bg-color);\n  color: var(--main-text-color);\n\n  border-radius: 50px;\n  box-shadow: 2px 2px 3px #999;\n\n  display: grid;\n  place-items: center;\n\n  text-decoration: none;\n}\n\n.task-form-divs {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n\n  display: grid;\n  align-items: center;\n  justify-content: center;\n\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.task-forms {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  font-family: var(--title-font-family);\n  font-size: 2rem;\n\n  background-color: var(--third-bg-color);\n  color: var(--main-text-color);\n\n  padding: 1rem;\n  border-radius: 1rem;\n}\n\n.form-buttons,\n.remove-project-buttons {\n  border: none;\n  background-color: var(--secondary-bg-color);\n  color: var(--main-text-color);\n  font-family: var(--task-font-family);\n  font-weight: bold;\n\n  cursor: pointer;\n}\n.submit-form-buttons {\n  width: 10rem;\n  height: 2rem;\n}\n\n.close-form-button {\n  align-self: flex-end;\n  width: 2rem;\n  height: 2rem;\n}\n\n#fill-all-required-fields,\n#fill-project-name,\n#fill-all-edit-values {\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n#add-project-form > fieldset {\n  display: flex;\n  align-items: center;\n}\n#project-name {\n  width: 100%;\n}\n\n.project-title {\n  margin: 0;\n}\n\n.project-names {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  cursor: pointer;\n}\n\n.selected-project,\n.selected-status {\n  color: var(--fourth-bg-color);\n}\n\n.status-choice {\n  cursor: pointer;\n}\n\n#view-all {\n  cursor: pointer;\n}\n\n.high-priority-task {\n  border-left: 2px solid var(--high-priority-color);\n}\n.medium-priority-task {\n  border-left: 2px solid var(--medium-priority-color);\n}\n.low-priority-task {\n  border-left: 2px solid var(--low-priority-color);\n}\n",
          '',
        ]);
        const i = s;
      },
      645: (e) => {
        'use strict';
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = '',
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += '@supports ('.concat(t[4], ') {')),
                  t[2] && (n += '@media '.concat(t[2], ' {')),
                  r &&
                    (n += '@layer'.concat(
                      t[5].length > 0 ? ' '.concat(t[5]) : '',
                      ' {'
                    )),
                  (n += e(t)),
                  r && (n += '}'),
                  t[2] && (n += '}'),
                  t[4] && (n += '}'),
                  n
                );
              }).join('');
            }),
            (t.i = function (e, n, r, o, a) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var s = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var c = this[i][0];
                  null != c && (s[c] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var d = [].concat(e[l]);
                (r && s[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = '@layer'
                        .concat(d[5].length > 0 ? ' '.concat(d[5]) : '', ' {')
                        .concat(d[1], '}')),
                    (d[5] = a)),
                  n &&
                    (d[2]
                      ? ((d[1] = '@media '
                          .concat(d[2], ' {')
                          .concat(d[1], '}')),
                        (d[2] = n))
                      : (d[2] = n)),
                  o &&
                    (d[4]
                      ? ((d[1] = '@supports ('
                          .concat(d[4], ') {')
                          .concat(d[1], '}')),
                        (d[4] = o))
                      : (d[4] = ''.concat(o))),
                  t.push(d));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        'use strict';
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        'use strict';
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var a = {}, s = [], i = 0; i < e.length; i++) {
            var c = e[i],
              l = r.base ? c[0] + r.base : c[0],
              d = a[l] || 0,
              u = ''.concat(l, ' ').concat(d);
            a[l] = d + 1;
            var p = n(u),
              m = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(m);
            else {
              var f = o(m, r);
              (r.byIndex = i),
                t.splice(i, 0, { identifier: u, updater: f, references: 1 });
            }
            s.push(u);
          }
          return s;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var s = 0; s < a.length; s++) {
              var i = n(a[s]);
              t[i].references--;
            }
            for (var c = r(e, o), l = 0; l < a.length; l++) {
              var d = n(a[l]);
              0 === t[d].references && (t[d].updater(), t.splice(d, 1));
            }
            a = c;
          };
        };
      },
      569: (e) => {
        'use strict';
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        'use strict';
        e.exports = function (e) {
          var t = document.createElement('style');
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        'use strict';
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute('nonce', t);
        };
      },
      795: (e) => {
        'use strict';
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = '';
                n.supports && (r += '@supports ('.concat(n.supports, ') {')),
                  n.media && (r += '@media '.concat(n.media, ' {'));
                var o = void 0 !== n.layer;
                o &&
                  (r += '@layer'.concat(
                    n.layer.length > 0 ? ' '.concat(n.layer) : '',
                    ' {'
                  )),
                  (r += n.css),
                  o && (r += '}'),
                  n.media && (r += '}'),
                  n.supports && (r += '}');
                var a = n.sourceMap;
                a &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      ' */'
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        'use strict';
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      455: (e) => {
        e.exports =
          "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='%23000000'%3e%3cpath d='M0 0h24v24H0V0z' fill='none'/%3e%3cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'/%3e%3c/svg%3e";
      },
      687: (e) => {
        e.exports =
          "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='%23000000'%3e%3cpath d='M0 0h24v24H0V0z' fill='none'/%3e%3cpath d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75 2.53-2.54z'/%3e%3c/svg%3e";
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      'use strict';
      var e = n(379),
        t = n.n(e),
        r = n(795),
        o = n.n(r),
        a = n(569),
        s = n.n(a),
        i = n(565),
        c = n.n(i),
        l = n(216),
        d = n.n(l),
        u = n(589),
        p = n.n(u),
        m = n(28),
        f = {};
      (f.styleTagTransform = p()),
        (f.setAttributes = c()),
        (f.insert = s().bind(null, 'head')),
        (f.domAPI = o()),
        (f.insertStyleElement = d()),
        t()(m.Z, f),
        m.Z && m.Z.locals && m.Z.locals;
      var g = n(687),
        v = n.n(g),
        k = n(455),
        y = n.n(k);
      let h = 0,
        b = -1;
      const x = (e, t, n) => {
          let r = !1,
            o = n,
            a = e,
            s = t;
          return {
            getTitle: () => a,
            getDueDate: () => s,
            getPriority: () => o,
            getIsDone: () => r,
            setTitle: (e) => {
              a = e;
            },
            setDueDate: (e) => {
              s = e;
            },
            setPriority: (e) => {
              o = e;
            },
            setDone: () => {
              r = !0;
            },
            setDoing: () => {
              r = !1;
            },
          };
        },
        j = (() => {
          let e, t;
          if (
            ((e =
              null === localStorage.getItem('projects')
                ? ['default']
                : JSON.parse(localStorage.getItem('projects'))),
            null === localStorage.getItem('tasks'))
          )
            t = [];
          else {
            const e = JSON.parse(localStorage.getItem('tasks'));
            t = e.map((e) => {
              const t = e.projectId;
              return {
                task: (({
                  taskName: e,
                  taskDueDate: t,
                  taskPriority: n,
                  taskIsDone: r,
                }) => {
                  const o = x(e, t, n);
                  return r && o.setDone(), o;
                })(e.task),
                projectId: t,
              };
            });
          }
          return {
            addTask: (e, n) => {
              t.push({ task: e, projectId: n });
            },
            removeTask: (e) => {
              t = t.slice(0, e).concat(t.slice(e + 1));
            },
            getTasks: () => t,
            addProject: (t) => {
              e.push(t);
            },
            removeProject: (n) => {
              (e = e.slice(0, n).concat(e.slice(n + 1))),
                (t = t.filter((e) => e.projectId !== n));
            },
            getProjects: () => e,
            setTaskProjectId: (e, n) => {
              t[e].projectId = n;
            },
          };
        })(),
        S = (e, t) => {
          const n = document.createElement('option');
          return (n.innerText = e), (n.value = t), n;
        },
        w = (e) => e.map((e, t) => S(e, t)),
        T = () => {
          document.querySelector('#add-task-div').style.display = 'none';
        },
        E = () => {
          document.querySelector('#add-project-div').style.display = 'none';
        },
        D = () => {
          document.querySelector('#edit-task-div').style.display = 'none';
        },
        L = (e) => {
          const t = document.querySelector('#main');
          t.replaceChildren(),
            e.forEach((e, n) => {
              const r = ((e, t, n) => {
                const r = document.createElement('div');
                let o;
                switch (
                  (r.classList.add('task'),
                  n && (r.style.display = 'none'),
                  e.task.getPriority())
                ) {
                  case 'high':
                    o = 'high-priority-task';
                    break;
                  case 'medium':
                    o = 'medium-priority-task';
                    break;
                  case 'low':
                    o = 'low-priority-task';
                }
                r.classList.add(o);
                const a = document.createElement('div');
                a.classList.add('task-info');
                const s = document.createElement('input');
                (s.type = 'checkbox'),
                  (s.name = `task-checkbox-${t}`),
                  (s.id = `task-checkbox-${t}`),
                  (s.checked = e.task.getIsDone()),
                  s.classList.add('task-checkbox'),
                  s.addEventListener('click', (e) =>
                    ((e, t) => {
                      e.target.checked
                        ? j.getTasks()[t].task.setDone()
                        : j.getTasks()[t].task.setDoing(),
                        L(j.getTasks());
                    })(e, t)
                  );
                const i = document.createElement('p');
                (i.id = `task-title-${t}`),
                  i.classList.add('task-title'),
                  (i.innerText = e.task.getTitle()),
                  a.appendChild(s),
                  a.appendChild(i);
                const c = document.createElement('div');
                c.classList.add('right-task-div');
                const l = document.createElement('p');
                l.innerText = e.task.getDueDate();
                const d = document.createElement('div');
                d.classList.add('task-buttons');
                const u = document.createElement('img');
                (u.src = v()),
                  (u.alt = 'edit task'),
                  (u.id = `task-edit-${t}`),
                  u.classList.add('task-edit'),
                  u.addEventListener('click', (e) =>
                    ((e, t) => {
                      const n = document.querySelector('#edit-task-project'),
                        r = w(j.getProjects());
                      n.replaceChildren();
                      const o = S('', '');
                      (o.selected = !0),
                        (o.disabled = !0),
                        n.appendChild(o),
                        r.forEach((e) => n.appendChild(e));
                      const a = j.getTasks()[t].task;
                      (document.querySelector('#edit-task-name').value =
                        a.getTitle()),
                        (document.querySelector('#edit-task-dueDate').value =
                          a.getDueDate()),
                        (document.querySelector('#edit-task-priority').value =
                          a.getPriority()),
                        (document.querySelector('#edit-task-project').value =
                          j.getTasks()[t].projectId),
                        (document.querySelector(
                          '#submit-edit-task'
                        ).dataset.key = t),
                        (document.querySelector(
                          '#edit-task-div'
                        ).style.display = 'grid');
                    })(0, t)
                  );
                const p = document.createElement('img');
                return (
                  (p.src = y()),
                  (p.alt = 'delete task'),
                  (p.id = `task-delete-${t}`),
                  p.classList.add('task-delete'),
                  p.addEventListener('click', (e) => {
                    return (n = t), j.removeTask(n), void L(j.getTasks());
                    var n;
                  }),
                  d.appendChild(u),
                  d.appendChild(p),
                  c.appendChild(l),
                  c.appendChild(d),
                  r.appendChild(a),
                  r.appendChild(c),
                  r
                );
              })(
                e,
                n,
                !((e, t) => {
                  return (
                    ((e) => -1 === b || e === b)(t) &&
                    (((n = e.task.getIsDone()) && 1 === h) || (!n && 0 === h))
                  );
                  var n;
                })(e, e.projectId)
              );
              t.appendChild(r);
            });
          const n = (e = j.getTasks()).map((e) => {
            return {
              task:
                ((t = e.task),
                {
                  taskName: t.getTitle(),
                  taskDueDate: t.getDueDate(),
                  taskPriority: t.getPriority(),
                  taskIsDone: t.getIsDone(),
                }),
              projectId: e.projectId,
            };
            var t;
          });
          localStorage.setItem('tasks', JSON.stringify(n));
        },
        I = (e) => {
          const t = document.querySelector('#projects-list');
          t.replaceChildren(),
            e.forEach((e, n) => {
              const r = ((e, t) => {
                const n = document.createElement('li');
                n.classList.add('project-names'),
                  t === b && n.classList.add('selected-project'),
                  -1 === b
                    ? document
                        .querySelector('#view-all')
                        .classList.add('selected-project')
                    : document
                        .querySelector('#view-all')
                        .classList.remove('selected-project'),
                  n.addEventListener('click', (e) =>
                    ((e, t) => {
                      (b = t), I(j.getProjects()), L(j.getTasks());
                    })(0, t)
                  );
                const r = document.createElement('p');
                if (
                  ((r.innerText = e),
                  r.classList.add('project-title'),
                  n.appendChild(r),
                  0 !== t)
                ) {
                  const e = document.createElement('button');
                  e.classList.add('remove-project-buttons'),
                    (e.type = 'button'),
                    (e.dataset.key = t),
                    (e.innerText = '✕'),
                    e.addEventListener('click', (e) => {
                      return (
                        (n = t),
                        j.removeProject(n),
                        I(j.getProjects()),
                        void L(j.getTasks())
                      );
                      var n;
                    }),
                    n.appendChild(e);
                }
                return n;
              })(e, n);
              t.appendChild(r);
            }),
            localStorage.setItem('projects', JSON.stringify(e));
        },
        q = () => {
          const e = document.querySelector('#status-list');
          e.replaceChildren(),
            ['Doing', 'Done'].forEach((t, n) => {
              const r = ((e, t) => {
                const n = document.createElement('li');
                return (
                  (n.innerText = e),
                  n.classList.add('status-choice'),
                  n.addEventListener('click', (e) =>
                    ((e, t) => {
                      (h = t), q(), L(j.getTasks());
                    })(0, t)
                  ),
                  h === t && n.classList.add('selected-status'),
                  n
                );
              })(t, n);
              e.appendChild(r);
            });
        };
      document
        .querySelector('#add-task')
        .addEventListener('click', function (e) {
          const t = document.querySelector('#task-project'),
            n = w(j.getProjects());
          t.replaceChildren();
          const r = S('', '');
          (r.selected = !0),
            (r.disabled = !0),
            t.appendChild(r),
            n.forEach((e) => t.appendChild(e)),
            (document.querySelector('#add-task-div').style.display = 'grid');
        }),
        document
          .querySelector('#add-project')
          .addEventListener('click', function (e) {
            document.querySelector('#add-project-div').style.display = 'grid';
          }),
        document
          .querySelector('#close-task-form')
          .addEventListener('click', function (e) {
            T();
          }),
        document
          .querySelector('#close-project-form')
          .addEventListener('click', () => {
            E();
          }),
        document
          .querySelector('#close-task-edit-form')
          .addEventListener('click', (e) => {
            D();
          }),
        document
          .querySelector('#submit-task')
          .addEventListener('click', function (e) {
            e.preventDefault();
            const t = document.querySelector('#add-task-form'),
              n = new FormData(t),
              r = n.get('task-name'),
              o = n.get('task-dueDate'),
              a = n.get('task-priority'),
              s = parseInt(n.get('task-project')),
              i = document.querySelector('#fill-all-required-fields');
            if ('' === r || ('' === o) | (null === a) || isNaN(s))
              return void (i.textContent = 'Please fill all the fields.');
            i.textContent = '';
            const c = x(r, o, a);
            j.addTask(c, s), t.reset(), T(), L(j.getTasks());
          }),
        document
          .querySelector('#submit-project')
          .addEventListener('click', function (e) {
            e.preventDefault();
            const t = document.querySelector('#add-project-form'),
              n = new FormData(t).get('project-name'),
              r = document.querySelector('#fill-project-name');
            n
              ? ((r.textContent = ''),
                j.addProject(n),
                t.reset(),
                E(),
                I(j.getProjects()))
              : (r.textContent = 'Please provide a project name.');
          }),
        document
          .querySelector('#submit-edit-task')
          .addEventListener('click', function (e) {
            e.preventDefault();
            const t = document.querySelector('#edit-task-form'),
              n = new FormData(t),
              r = n.get('edit-task-name'),
              o = n.get('edit-task-dueDate'),
              a = n.get('edit-task-priority'),
              s = parseInt(n.get('edit-task-project')),
              i = parseInt(e.target.dataset.key),
              c = j.getTasks()[i].task;
            '' !== r && c.setTitle(r),
              '' !== o && c.setDueDate(o),
              null !== a && c.setPriority(a),
              isNaN(s) || j.setTaskProjectId(i, s),
              t.reset(),
              D(),
              L(j.getTasks());
          }),
        document.querySelector('#view-all').addEventListener('click', (e) => {
          (b = -1), I(j.getProjects()), L(j.getTasks());
        }),
        L(j.getTasks()),
        I(j.getProjects()),
        q();
    })();
})();
