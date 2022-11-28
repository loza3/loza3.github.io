define(['dart_sdk', 'packages/polylabel/src/data.dart', 'packages/collection/src/priority_queue.dart'], (function load__packages__polylabel__src__polylabel_base_dart(dart_sdk, packages__polylabel__src__data$46dart, packages__collection__src__priority_queue$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const data = packages__polylabel__src__data$46dart.src__data;
  const priority_queue = packages__collection__src__priority_queue$46dart.src__priority_queue;
  var polylabel_base = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $compareTo = dartx.compareTo;
  var $round = dartx.round;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    PointOfnum: () => (T.PointOfnum = dart.constFn(math.Point$(core.num)))(),
    HeapPriorityQueueOfCell: () => (T.HeapPriorityQueueOfCell = dart.constFn(priority_queue.HeapPriorityQueue$(data.Cell)))(),
    CellAndCellToint: () => (T.CellAndCellToint = dart.constFn(dart.fnType(core.int, [data.Cell, data.Cell])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  polylabel_base.polylabel = function polylabel(polygon, opts) {
    let precision = opts && 'precision' in opts ? opts.precision : 1;
    let debug = opts && 'debug' in opts ? opts.debug : false;
    let minX = 0;
    let minY = 0;
    let maxX = 0;
    let maxY = 0;
    for (let i = 0; i < polygon[$_get](0)[$length]; i = i + 1) {
      let p = polygon[$_get](0)[$_get](i);
      if (i === 0 || p.x < minX) minX = p.x;
      if (i === 0 || p.y < minY) minY = p.y;
      if (i === 0 || p.x > maxX) maxX = p.x;
      if (i === 0 || p.y > maxY) maxY = p.y;
    }
    let width = maxX - minX;
    let height = maxY - minY;
    let cellSize = math.min(core.num, width, height);
    let h = cellSize / 2;
    if (cellSize === 0) {
      return new data.PolylabelResult.new(new (T.PointOfnum()).new(minX, minY), 0);
    }
    let cellQueue = new (T.HeapPriorityQueueOfCell()).new(dart.fn((a, b) => b.max[$compareTo](a.max), T.CellAndCellToint()));
    for (let x = minX; x < maxX; x = x + cellSize) {
      for (let y = minY; y < maxY; y = y + cellSize) {
        cellQueue.add(new data.Cell.new(new (T.PointOfnum()).new(x + h, y + h), h, polygon));
      }
    }
    let bestCell = polylabel_base._getCentroidCell(polygon);
    let bboxCell = new data.Cell.new(new (T.PointOfnum()).new(minX + width / 2, minY + height / 2), 0, polygon);
    if (bboxCell.d > bestCell.d) bestCell = bboxCell;
    let numProbes = cellQueue.length;
    while (cellQueue.isNotEmpty) {
      let cell = cellQueue.removeFirst();
      if (cell.d > bestCell.d) {
        bestCell = cell;
        if (debug) {
          core.print("found best " + dart.str((10000.0 * cell.d)[$round]() / 10000.0) + " after " + dart.str(numProbes) + " probes");
        }
      }
      if (cell.max - bestCell.d <= precision) continue;
      h = cell.h / 2;
      cellQueue.add(new data.Cell.new(new (T.PointOfnum()).new(cell.c.x - h, cell.c.y - h), h, polygon));
      cellQueue.add(new data.Cell.new(new (T.PointOfnum()).new(cell.c.x + h, cell.c.y - h), h, polygon));
      cellQueue.add(new data.Cell.new(new (T.PointOfnum()).new(cell.c.x - h, cell.c.y + h), h, polygon));
      cellQueue.add(new data.Cell.new(new (T.PointOfnum()).new(cell.c.x + h, cell.c.y + h), h, polygon));
      numProbes = numProbes + 4;
    }
    if (debug) {
      core.print("best distance: " + dart.str(bestCell.d));
    }
    return new data.PolylabelResult.new(bestCell.c, bestCell.d);
  };
  polylabel_base._getCentroidCell = function _getCentroidCell(polygon) {
    let t0;
    let area = 0;
    let x = 0;
    let y = 0;
    let ring = polygon[$_get](0);
    for (let i = 0, len = ring[$length], j = len - 1; i < len; j = (t0 = i, i = t0 + 1, t0)) {
      let a = ring[$_get](i);
      let b = ring[$_get](j);
      let f = a.x * b.y - b.x * a.y;
      x = x + (a.x + b.x) * f;
      y = y + (a.y + b.y) * f;
      area = area + f * 3;
    }
    if (area === 0) return new data.Cell.new(ring[$_get](0), 0, polygon);
    return new data.Cell.new(new (T.PointOfnum()).new(x / area, y / area), 0, polygon);
  };
  dart.trackLibraries("packages/polylabel/src/polylabel_base.dart", {
    "package:polylabel/src/polylabel_base.dart": polylabel_base
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["polylabel_base.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/polylabel/src/polylabel_base.dart.lib.js"}');
  // Exports:
  return {
    src__polylabel_base: polylabel_base
  };
}));

//# sourceMappingURL=polylabel_base.dart.lib.js.map
