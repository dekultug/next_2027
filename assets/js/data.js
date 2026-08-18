/* =========================================================================
   Dữ liệu lộ trình Junior → Middle Android Developer
   Bạn có thể tự bổ sung tài liệu bằng cách sửa file này.
   Cấu trúc:
     META      -> thông tin chung
     PHASES    -> timeline 19 tuần
     PILLARS   -> 3 trụ cột (algo / db / net)
     REVISE    -> lớp ôn tập nền tảng
     CAPSTONE  -> project xuyên suốt
     MILESTONES-> câu hỏi tự chấm "đã lên middle chưa"
   Mỗi "topic" có: id (duy nhất, để lưu tiến độ) + nội dung.
   ========================================================================= */

const META = {
  title: "Lộ trình Junior → Middle Android",
  owner: "Kế hoạch cá nhân của Tùng",
  subtitle: "3 trụ cột: Cơ sở dữ liệu · Lập trình mạng · Thuật toán — + lớp ôn tập nền tảng",
  timeline: "Giữa tháng 8 → hết tháng 12 / 2026",
  weeks: 19,
  budget: "~8 giờ / tuần",
  principle: "Học lý thuyết + áp dụng ngay vào project thật. Đọc không làm middle được — build mới làm middle.",
};

/* ----------------------------- TIMELINE -------------------------------- */
const PHASES = [
  {
    id: "phase0",
    start: "2026-08-10", end: "2026-08-30",
    tag: "Phase 0",
    name: "Đánh giá & nền tảng",
    weeks: "Tuần 1–3",
    dates: "Giữa T8 → đầu T9",
    color: "slate",
    focus: [
      "Học Big-O + ôn nhanh cấu trúc dữ liệu cơ bản",
      "Ôn kỹ Coroutine & Flow — nền của cả DB lẫn Network phía sau",
      "Ôn nhanh Android Components: lifecycle, ViewModel, StateFlow, WorkManager",
      "Ôn SQL cơ bản (JOIN, GROUP BY, subquery); nền mạng: DNS, TCP, HTTP",
      "Tự chấm điểm theo checklist → khoanh vùng lỗ hổng lớn nhất",
      "Khởi tạo capstone project (chỉ dựng khung)",
    ],
  },
  {
    id: "phase1",
    start: "2026-08-31", end: "2026-10-04",
    tag: "Phase 1",
    name: "Cơ sở dữ liệu chuyên sâu",
    weeks: "Tuần 4–8",
    dates: "Tháng 9",
    color: "amber",
    focus: [
      "SQL nâng cao + thiết kế quan hệ + chuẩn hoá",
      "Index & tối ưu query (đọc EXPLAIN QUERY PLAN)",
      "Transaction, WAL, isolation",
      "Room master: relation, migration + test, @Transaction, Flow",
      "🔗 Coroutine: DAO trả Flow, Dispatchers.IO, test DAO với runTest",
      "🎯 Xây lớp DB hoàn chỉnh cho capstone (nhiều bảng, quan hệ, index, test)",
    ],
  },
  {
    id: "phase2",
    start: "2026-10-05", end: "2026-11-15",
    tag: "Phase 2",
    name: "Lập trình mạng chuyên sâu",
    weeks: "Tuần 9–13",
    dates: "Đầu T10 → giữa T11",
    color: "sky",
    focus: [
      "TCP / TLS / HTTP2 sâu hơn",
      "Interceptor, cache, dispatcher của OkHttp; Retrofit bên dưới",
      "Auth + refresh token flow + lưu token an toàn",
      "Retry / backoff, timeout, xử lý lỗi tập trung",
      "🔗 Coroutine: API suspend, gộp request bằng async, realtime bằng callbackFlow",
      "🎯 Xây lớp network cho capstone — auth, cache, retry, offline-first",
    ],
  },
  {
    id: "deload",
    start: "2026-11-16", end: "2026-12-06",
    tag: "Deload",
    name: "Tập trung thi JLPT N5",
    weeks: "Tuần ~15",
    dates: "Cuối T11 → 6/12",
    color: "rose",
    focus: [
      "Chỉ giữ 15–20 phút thuật toán/ngày cho khỏi nguội tay",
      "Tạm dừng chủ đề nặng — nghỉ ngơi đầu óc trước ngày thi 6/12",
    ],
  },
  {
    id: "phase3",
    start: "2026-12-07", end: "2026-12-27",
    tag: "Phase 3",
    name: "Thuật toán tăng tốc + Kiến trúc",
    weeks: "Tuần 16–18",
    dates: "Sau thi → giữa T12",
    color: "violet",
    focus: [
      "Đẩy LeetCode lên Medium, tập trung graph + DP",
      "Ôn Design Pattern + SOLID → soi lại capstone vi phạm chỗ nào",
      "Ghép vào kiến trúc chuẩn: Clean Architecture, MVVM/MVI, Hilt, chia module",
      "Refactor capstone theo SOLID (SRP & Dependency Inversion)",
      "Viết test (unit + một ít integration)",
    ],
  },
  {
    id: "phase4",
    start: "2026-12-28", end: "2026-12-31",
    tag: "Phase 4",
    name: "Capstone hoàn thiện & tổng kết",
    weeks: "Tuần 19",
    dates: "Cuối T12",
    color: "emerald",
    focus: [
      "Hoàn thiện capstone: DB thật + Network thật + kiến trúc sạch + test",
      "Rà lại toàn bộ checklist, ghi ra 3 điểm còn yếu để sang năm học tiếp",
    ],
  },
];

/* ======================================================================
   TRỤ CỘT 1 — THUẬT TOÁN & CẤU TRÚC DỮ LIỆU  (nội dung đầy đủ)
   ====================================================================== */
const ALGO = {
  id: "algo",
  icon: "🧠",
  title: "Thuật toán & Cấu trúc dữ liệu",
  color: "violet",
  tagline: "Thói quen 30'/ngày xuyên suốt 19 tuần. Ưu tiên hiểu pattern hơn cày số lượng.",
  resources: [
    { name: "NeetCode 150", note: "roadmap theo pattern — cực tốt", url: "https://neetcode.io/roadmap" },
    { name: "Grokking Algorithms", note: "sách dễ đọc, nhiều hình" },
    { name: "LeetCode", note: "luyện Easy → Medium", url: "https://leetcode.com" },
  ],
  sections: [
    {
      title: "Nền tảng",
      topics: [
        {
          id: "algo-bigo",
          name: "Big-O — độ phức tạp thời gian & không gian",
          level: "core",
          summary:
            "Big-O mô tả tốc độ tăng của thời gian/bộ nhớ khi input lớn dần — bỏ qua hằng số, chỉ giữ phần trội. Đây là ngôn ngữ chung để so sánh giải pháp và trả lời câu 'tại sao chọn cách này'.",
          points: [
            "O(1) hằng số · O(log n) chia đôi (binary search) · O(n) duyệt tuyến tính · O(n log n) sort tốt · O(n²) hai vòng lồng · O(2ⁿ)/O(n!) vét cạn",
            "Tính cả space complexity: đệ quy tốn stack, HashMap tốn bộ nhớ đổi lấy tốc độ",
            "Amortized: ArrayList.add trung bình O(1) dù thỉnh thoảng resize O(n)",
            "Khi phỏng vấn: luôn nói complexity trước rồi mới nói cách tối ưu",
          ],
          code: {
            lang: "kotlin",
            content: `// O(n²): tìm cặp trùng bằng 2 vòng lồng
fun hasDupSlow(a: IntArray): Boolean {
    for (i in a.indices)
        for (j in i + 1 until a.size)
            if (a[i] == a[j]) return true
    return false
}

// O(n): đổi thời gian lấy bộ nhớ bằng HashSet
fun hasDupFast(a: IntArray): Boolean {
    val seen = HashSet<Int>()
    for (x in a) if (!seen.add(x)) return true  // add() = false nếu đã có
    return false
}`,
          },
          note: "Bậc thầy hoá: nhìn code là đoán được Big-O; nhìn Big-O là biết input lớn cỡ nào thì 'chết'.",
        },
      ],
    },
    {
      title: "Cấu trúc dữ liệu — hiểu bản chất + chọn đúng",
      topics: [
        {
          id: "algo-array",
          name: "Array · ArrayList vs LinkedList",
          level: "core",
          summary:
            "Array/ArrayList lưu liền kề trong bộ nhớ → truy cập ngẫu nhiên O(1), nhưng chèn/xoá giữa phải dịch phần tử O(n). LinkedList nối bằng con trỏ → chèn/xoá đầu O(1) nhưng truy cập index O(n).",
          points: [
            "Truy cập theo index nhiều → ArrayList. Chèn/xoá ở đầu/giữa liên tục → LinkedList (hiếm khi cần trên Android)",
            "ArrayList tự resize (thường gấp đôi) → add cuối là amortized O(1)",
            "Cache locality: array duyệt nhanh hơn linked list rất nhiều trên CPU thật",
            "Trong Android 99% trường hợp dùng ArrayList; LinkedList gần như không cần",
          ],
          code: {
            lang: "kotlin",
            content: `val list = ArrayList<Int>()   // truy cập O(1), chèn giữa O(n)
list.add(10)                  // amortized O(1)
val x = list[0]               // O(1)

// So sánh trade-off:
//              get(i)   add(cuối)   add(đầu)   remove(giữa)
// ArrayList     O(1)      O(1)*      O(n)         O(n)
// LinkedList    O(n)      O(1)       O(1)         O(1) (nếu có node)`,
          },
          complexity: "get O(1) · add cuối O(1)* · chèn giữa O(n)",
        },
        {
          id: "algo-stack-queue",
          name: "Stack · Queue · Deque",
          level: "core",
          summary:
            "Stack = LIFO (vào sau ra trước) — dùng cho undo, DFS, đối xứng ngoặc. Queue = FIFO — dùng cho BFS, hàng đợi task. Deque = hai đầu, thay được cả stack lẫn queue.",
          points: [
            "Kotlin: dùng ArrayDeque<T> cho cả stack (addLast/removeLast) và queue (addLast/removeFirst)",
            "Ứng dụng kinh điển: kiểm tra ngoặc hợp lệ, tính biểu thức, duyệt cây/đồ thị",
            "Monotonic stack: giải nhóm bài 'next greater element' trong O(n)",
          ],
          code: {
            lang: "kotlin",
            content: `// Kiểm tra ngoặc hợp lệ — Stack kinh điển
fun isValid(s: String): Boolean {
    val st = ArrayDeque<Char>()
    val pair = mapOf(')' to '(', ']' to '[', '}' to '{')
    for (c in s) {
        if (c in pair.values) st.addLast(c)
        else if (st.removeLastOrNull() != pair[c]) return false
    }
    return st.isEmpty()
}`,
          },
          problems: ["Valid Parentheses", "Min Stack", "Daily Temperatures (monotonic stack)"],
        },
        {
          id: "algo-hashmap",
          name: "HashMap / HashSet — hay hỏi phỏng vấn nhất",
          level: "focus",
          summary:
            "Băm key thành index của mảng bucket → tra cứu/thêm/xoá trung bình O(1). Va chạm (hai key cùng bucket) xử lý bằng chaining (danh sách liên kết) hoặc, khi bucket đông, chuyển sang cây cân bằng để tránh O(n).",
          points: [
            "Trung bình O(1), xấu nhất O(n) khi hash kém/nhiều va chạm; Java 8+ chuyển bucket dài thành cây → O(log n)",
            "Load factor (~0.75) vượt ngưỡng → rehash (tạo bảng lớn hơn, băm lại) O(n)",
            "Key BẮT BUỘC override đúng hashCode() + equals() và nên immutable — dùng data class là an toàn",
            "HashMap KHÔNG giữ thứ tự; cần thứ tự chèn → LinkedHashMap; cần sắp xếp → TreeMap (O(log n))",
            "Đây là 'chìa khoá' của rất nhiều bài: đổi bài O(n²) thành O(n) bằng cách nhớ trạng thái trong map",
          ],
          code: {
            lang: "kotlin",
            content: `// Two Sum — dùng HashMap biến O(n²) thành O(n)
fun twoSum(nums: IntArray, target: Int): IntArray {
    val need = HashMap<Int, Int>()      // value -> index
    for (i in nums.indices) {
        need[target - nums[i]]?.let { return intArrayOf(it, i) }
        need[nums[i]] = i
    }
    return intArrayOf()
}

// Key tự định nghĩa: data class tự sinh hashCode/equals
data class Point(val x: Int, val y: Int)   // dùng làm key an toàn`,
          },
          complexity: "get/put/contains trung bình O(1), xấu nhất O(log n)",
          problems: ["Two Sum", "Group Anagrams", "Top K Frequent Elements", "Longest Consecutive Sequence"],
          note: "Câu phỏng vấn kinh điển: 'HashMap hoạt động thế nào?' → nói được: hash → bucket → va chạm → chaining/tree → resize.",
        },
        {
          id: "algo-tree-bst",
          name: "Cây nhị phân · BST · cân bằng",
          level: "core",
          summary:
            "BST: node trái < node < node phải → tìm/thêm/xoá O(log n) NẾU cây cân bằng. Cây lệch (thêm dữ liệu đã sắp) suy biến thành danh sách → O(n). Cây tự cân bằng (AVL, Red-Black) giữ chiều cao ~log n.",
          points: [
            "Duyệt: in-order (trái–gốc–phải) cho BST ra dãy tăng dần; pre-order/post-order dùng khi copy/xoá cây",
            "Cân bằng là lý do TreeMap/TreeSet luôn O(log n) — Red-Black tree bên dưới",
            "Nhận diện pattern đệ quy trên cây: hàm trả kết quả con trái + con phải rồi gộp",
          ],
          code: {
            lang: "kotlin",
            content: `class TreeNode(val v: Int, var l: TreeNode? = null, var r: TreeNode? = null)

// In-order → dãy tăng dần với BST
fun inorder(n: TreeNode?, out: MutableList<Int>) {
    if (n == null) return
    inorder(n.l, out); out.add(n.v); inorder(n.r, out)
}

// Chiều cao cây — mẫu đệ quy gộp trái/phải
fun height(n: TreeNode?): Int =
    if (n == null) 0 else 1 + maxOf(height(n.l), height(n.r))`,
          },
          problems: ["Invert Binary Tree", "Validate BST", "Lowest Common Ancestor", "Kth Smallest in BST"],
        },
        {
          id: "algo-heap",
          name: "Heap / Priority Queue",
          level: "focus",
          summary:
            "Cây nhị phân đầy (lưu trong mảng) giữ phần tử nhỏ nhất (min-heap) hoặc lớn nhất (max-heap) ở đỉnh. Lấy đỉnh O(1), thêm/xoá đỉnh O(log n). Là công cụ chuẩn cho bài 'Top K' và 'trộn nhiều dãy'.",
          points: [
            "Kotlin: PriorityQueue<T> mặc định min-heap; đổi comparator để thành max-heap",
            "Top K frequent: heap kích thước K → O(n log k) thay vì sort O(n log n)",
            "Dijkstra, merge k sorted lists, median stream đều dựa trên heap",
          ],
          code: {
            lang: "kotlin",
            content: `import java.util.PriorityQueue

// K phần tử lớn nhất — min-heap size K
fun topK(nums: IntArray, k: Int): List<Int> {
    val pq = PriorityQueue<Int>()          // min-heap
    for (x in nums) {
        pq.offer(x)
        if (pq.size > k) pq.poll()          // bỏ nhỏ nhất
    }
    return pq.toList()                       // còn lại là K lớn nhất
}`,
          },
          complexity: "peek O(1) · offer/poll O(log n)",
          problems: ["Kth Largest Element", "Merge k Sorted Lists", "Find Median from Data Stream"],
        },
        {
          id: "algo-graph",
          name: "Graph — biểu diễn & duyệt",
          level: "core",
          summary:
            "Đồ thị = đỉnh + cạnh. Hai cách lưu: adjacency list (map đỉnh → danh sách hàng xóm, tiết kiệm khi thưa) và adjacency matrix (ma trận n×n, tốt khi dày/cần tra cạnh O(1)). Duyệt bằng BFS/DFS.",
          points: [
            "Adjacency list dùng cho hầu hết bài (đồ thị thực tế thưa)",
            "Nhớ đánh dấu visited để tránh lặp vô hạn khi có chu trình",
            "Bài lưới 2D (ma trận) thực chất là đồ thị: mỗi ô nối 4 (hoặc 8) ô kề",
          ],
          code: {
            lang: "kotlin",
            content: `// Adjacency list từ danh sách cạnh
fun buildGraph(n: Int, edges: Array<IntArray>): Map<Int, MutableList<Int>> {
    val g = HashMap<Int, MutableList<Int>>()
    for (i in 0 until n) g[i] = mutableListOf()
    for ((u, v) in edges) { g[u]!!.add(v); g[v]!!.add(u) } // vô hướng
    return g
}`,
          },
          problems: ["Number of Islands", "Clone Graph", "Course Schedule (topological sort)"],
        },
        {
          id: "algo-trie",
          name: "Trie — cây tiền tố",
          level: "extra",
          summary:
            "Cây mà mỗi cạnh là một ký tự → tra tiền tố và autocomplete cực nhanh: O(độ dài từ), không phụ thuộc số lượng từ. Hữu ích cho ô search/gợi ý.",
          points: [
            "Mỗi node giữ map con theo ký tự + cờ isEnd đánh dấu kết thúc một từ",
            "insert/search/startsWith đều O(L) với L là độ dài chuỗi",
            "Đánh đổi bộ nhớ (nhiều node) lấy tốc độ tra tiền tố",
          ],
          code: {
            lang: "kotlin",
            content: `class Trie {
    private class Node { val next = HashMap<Char, Node>(); var end = false }
    private val root = Node()
    fun insert(w: String) {
        var cur = root
        for (c in w) cur = cur.next.getOrPut(c) { Node() }
        cur.end = true
    }
    fun startsWith(p: String): Boolean {
        var cur = root
        for (c in p) cur = cur.next[c] ?: return false
        return true
    }
}`,
          },
          problems: ["Implement Trie", "Word Search II", "Design Add and Search Words"],
        },
      ],
    },
    {
      title: "Kỹ thuật & pattern",
      topics: [
        {
          id: "algo-binary-search",
          name: "Binary Search",
          level: "focus",
          summary:
            "Trên dữ liệu đã sắp, mỗi bước loại nửa không gian → O(log n). Không chỉ tìm phần tử: còn 'binary search on answer' — tìm giá trị nhỏ nhất/lớn nhất thoả điều kiện đơn điệu.",
          points: [
            "Cẩn thận biên: dùng mid = lo + (hi - lo) / 2 để tránh tràn số",
            "Nhận diện: dữ liệu sắp xếp / hàm đơn điệu / 'tìm giá trị nhỏ nhất thoả X'",
            "Có sẵn: list.binarySearch(x) trong thư viện chuẩn",
          ],
          code: {
            lang: "kotlin",
            content: `fun binarySearch(a: IntArray, target: Int): Int {
    var lo = 0; var hi = a.size - 1
    while (lo <= hi) {
        val mid = lo + (hi - lo) / 2
        when {
            a[mid] == target -> return mid
            a[mid] < target  -> lo = mid + 1
            else             -> hi = mid - 1
        }
    }
    return -1
}`,
          },
          complexity: "O(log n)",
          problems: ["Binary Search", "Search in Rotated Sorted Array", "Koko Eating Bananas", "Find Min in Rotated Array"],
        },
        {
          id: "algo-two-pointers",
          name: "Two pointers · Sliding window",
          level: "focus",
          summary:
            "Hai con trỏ quét mảng/chuỗi thay cho hai vòng lồng → O(n). Sliding window là biến thể: cửa sổ co giãn để duy trì một điều kiện (tổng, số ký tự khác nhau…).",
          points: [
            "Two pointers: mảng đã sắp, tìm cặp/bộ ba thoả tổng; đảo chuỗi tại chỗ",
            "Sliding window: 'chuỗi con dài nhất thoả X', 'tổng cửa sổ K lớn nhất'",
            "Mẫu: mở rộng right, khi vi phạm điều kiện thì thu hẹp left",
          ],
          code: {
            lang: "kotlin",
            content: `// Chuỗi con không lặp ký tự dài nhất — sliding window
fun lengthOfLongestSubstring(s: String): Int {
    val last = HashMap<Char, Int>()
    var left = 0; var best = 0
    for (right in s.indices) {
        val c = s[right]
        if (last[c]?.let { it >= left } == true) left = last[c]!! + 1
        last[c] = right
        best = maxOf(best, right - left + 1)
    }
    return best
}`,
          },
          complexity: "O(n)",
          problems: ["Two Sum II", "3Sum", "Longest Substring Without Repeating", "Minimum Window Substring"],
        },
        {
          id: "algo-recursion",
          name: "Đệ quy & Backtracking",
          level: "core",
          summary:
            "Đệ quy: hàm gọi chính nó trên bài toán nhỏ hơn, phải có base case. Backtracking: thử một lựa chọn → đệ quy → hoàn tác (undo) → thử lựa chọn khác. Là khung cho tổ hợp, hoán vị, sinh tập con, giải Sudoku.",
          points: [
            "Luôn xác định: base case (dừng) + bước thu nhỏ (tiến về base)",
            "Mẫu backtracking: choose → explore → un-choose",
            "Đệ quy sâu tốn stack O(độ sâu); cẩn thận stack overflow",
          ],
          code: {
            lang: "kotlin",
            content: `// Sinh mọi tập con — backtracking
fun subsets(nums: IntArray): List<List<Int>> {
    val res = mutableListOf<List<Int>>()
    val path = mutableListOf<Int>()
    fun dfs(start: Int) {
        res.add(path.toList())              // ghi lại trạng thái hiện tại
        for (i in start until nums.size) {
            path.add(nums[i])                // choose
            dfs(i + 1)                       // explore
            path.removeAt(path.size - 1)     // un-choose
        }
    }
    dfs(0)
    return res
}`,
          },
          problems: ["Subsets", "Permutations", "Combination Sum", "Word Search", "N-Queens"],
        },
        {
          id: "algo-bfs-dfs",
          name: "BFS / DFS trên cây & đồ thị",
          level: "focus",
          summary:
            "DFS (stack/đệ quy) đi sâu hết một nhánh rồi quay lui — hợp cho backtracking, phát hiện chu trình, topo sort. BFS (queue) lan theo từng lớp — cho đường đi ngắn nhất trên đồ thị không trọng số và duyệt theo tầng.",
          points: [
            "BFS = đường ngắn nhất (theo số cạnh); DFS = khám phá/đường đi bất kỳ",
            "Đều cần visited set để tránh lặp khi có chu trình",
            "Bài lưới: mỗi ô là đỉnh, hàng xóm là 4 hướng — mẫu chung cho 'đếm đảo', 'loang'",
          ],
          code: {
            lang: "kotlin",
            content: `// BFS đường ngắn nhất trên đồ thị không trọng số
fun shortestPath(g: Map<Int, List<Int>>, src: Int, dst: Int): Int {
    val q = ArrayDeque<Int>(); val dist = HashMap<Int, Int>()
    q.addLast(src); dist[src] = 0
    while (q.isNotEmpty()) {
        val u = q.removeFirst()
        if (u == dst) return dist[u]!!
        for (v in g[u].orEmpty()) if (v !in dist) {
            dist[v] = dist[u]!! + 1
            q.addLast(v)
        }
    }
    return -1
}`,
          },
          problems: ["Number of Islands", "Rotting Oranges", "Course Schedule", "Word Ladder"],
        },
        {
          id: "algo-dp",
          name: "Quy hoạch động (DP) — nhập môn",
          level: "focus",
          summary:
            "Bài lớn = kết hợp lời giải bài con GỐI NHAU. Nhớ lại kết quả bài con (memo / bảng dp) để không tính lại → biến vét cạn O(2ⁿ) thành đa thức. Hai kiểu: top-down (đệ quy + memo) và bottom-up (điền bảng).",
          points: [
            "Nhận diện: 'đếm cách', 'giá trị lớn/nhỏ nhất', bài con lặp lại (Fibonacci, cầu thang, ba lô)",
            "Bước: định nghĩa trạng thái dp[i] là gì → công thức truy hồi → base case → thứ tự điền",
            "Bắt đầu top-down cho dễ nghĩ, rồi tối ưu sang bottom-up + nén bộ nhớ",
          ],
          code: {
            lang: "kotlin",
            content: `// Climbing Stairs — DP bottom-up, nén còn 2 biến
fun climbStairs(n: Int): Int {
    if (n <= 2) return n
    var a = 1; var b = 2                 // cách lên bậc 1 và bậc 2
    repeat(n - 2) { val c = a + b; a = b; b = c }
    return b
}
// dp[i] = dp[i-1] + dp[i-2]  (đến bậc i từ bậc i-1 hoặc i-2)`,
          },
          problems: ["Climbing Stairs", "House Robber", "Coin Change", "Longest Increasing Subsequence", "0/1 Knapsack"],
          note: "DP là phần khó nhất — để dành cho Phase 3 (sau thi JLPT). Làm chắc 5–7 bài mẫu là nắm được khung.",
        },
        {
          id: "algo-greedy",
          name: "Greedy — nhập môn",
          level: "core",
          summary:
            "Mỗi bước chọn phương án tối ưu cục bộ với hy vọng ra tối ưu toàn cục. Nhanh và đơn giản NHƯNG chỉ đúng khi bài toán có tính chất 'greedy choice' — cần chứng minh/kiểm tra, không phải lúc nào cũng dùng được.",
          points: [
            "Ứng dụng: xếp lịch theo thời gian kết thúc, đổi tiền (với một số bộ mệnh giá), khoảng cách nhảy",
            "Khác DP: greedy không quay lui, không thử mọi khả năng → nhanh hơn nhưng dễ sai",
            "Mẹo: nếu greedy không chắc đúng, hãy nghĩ tới DP",
          ],
          code: {
            lang: "kotlin",
            content: `// Jump Game — greedy: giữ vị trí xa nhất có thể tới
fun canJump(nums: IntArray): Boolean {
    var reach = 0
    for (i in nums.indices) {
        if (i > reach) return false          // kẹt, không tới được i
        reach = maxOf(reach, i + nums[i])
    }
    return true
}`,
          },
          problems: ["Jump Game", "Merge Intervals", "Non-overlapping Intervals", "Gas Station"],
        },
      ],
    },
    {
      title: "Luyện tập & Áp vào Android",
      topics: [
        {
          id: "algo-practice",
          name: "Chiến lược luyện tập",
          level: "note",
          summary:
            "Chất lượng > số lượng. Làm Easy cho vững nền, chuyển dần Medium. Sai thì xem lời giải, HIỂU pattern, rồi làm lại chính bài đó sau 3 ngày (spaced repetition).",
          points: [
            "Đi theo pattern (NeetCode) thay vì làm bài ngẫu nhiên",
            "Mỗi bài: nói complexity trước, code sau, rồi tự review có tối ưu được không",
            "Ghi lại 'pattern' mỗi bài vào note của mình — vài chục pattern là đủ cho phỏng vấn middle",
          ],
        },
        {
          id: "algo-android",
          name: "Áp vào Android thực tế",
          level: "note",
          summary:
            "Kiến thức này không chỉ để phỏng vấn — nó ảnh hưởng chất lượng code hằng ngày: chọn đúng collection, tránh cấp phát thừa, hiểu vì sao tra HashMap nhanh hơn duyệt List.",
          points: [
            "Danh sách tra cứu nhiều theo id → Map thay vì List.find (O(1) vs O(n))",
            "Cần loại trùng → Set; cần thứ tự chèn → LinkedHashMap/LinkedHashSet",
            "Tránh tạo object trong vòng lặp/RecyclerView bind → giảm GC pressure",
            "Hiểu Big-O giúp trả lời review: 'đoạn này O(n²), list lớn sẽ lag'",
          ],
        },
      ],
    },
  ],
};

/* ======================================================================
   TRỤ CỘT 2 — CƠ SỞ DỮ LIỆU  (nội dung đầy đủ)
   ====================================================================== */
const DB = {
  id: "db",
  icon: "🗄️",
  title: "Cơ sở dữ liệu",
  color: "amber",
  tagline: "SQL thuần → SQLite (bản chất DB của Android) → Room (lớp trên cùng).",
  resources: [
    { name: "Use The Index, Luke!", note: "kinh điển về index, miễn phí", url: "https://use-the-index-luke.com" },
    { name: "SQLite docs", note: "tài liệu chính thức", url: "https://www.sqlite.org/docs.html" },
    { name: "Room docs", note: "tài liệu chính thức", url: "https://developer.android.com/training/data-storage/room" },
  ],
  sections: [
    {
      title: "SQL & thiết kế quan hệ",
      topics: [
        {
          id: "db-select",
          name: "SELECT · WHERE · ORDER BY · LIMIT · phân trang",
          level: "core",
          summary:
            "Nền tảng truy vấn. Điểm middle nằm ở phân trang: OFFSET dễ viết nhưng chậm dần (phải bỏ qua N dòng); keyset (seek) dùng mốc của trang trước → nhanh và ổn định kể cả trang sâu.",
          points: [
            "Thứ tự logic: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT",
            "LIMIT/OFFSET: offset càng lớn càng chậm vì DB vẫn quét qua các dòng bị bỏ",
            "Keyset pagination: WHERE (created_at, id) < (mốc) ORDER BY ... LIMIT n — dùng index, O(log n) tới trang",
            "Trên Android/Paging 3 nên ưu tiên keyset cho danh sách dài",
          ],
          code: {
            lang: "sql",
            content: `-- Phân trang OFFSET (đơn giản, chậm khi sâu)
SELECT * FROM post ORDER BY created_at DESC LIMIT 20 OFFSET 4000;

-- Keyset / seek pagination (nhanh, ổn định)
SELECT * FROM post
WHERE created_at < :lastSeenTime
ORDER BY created_at DESC
LIMIT 20;`,
          },
        },
        {
          id: "db-join",
          name: "4 loại JOIN — khi nào dùng loại nào",
          level: "core",
          summary:
            "JOIN ghép các bảng theo điều kiện. INNER giữ dòng khớp cả hai bên; LEFT giữ hết bên trái (bên phải thiếu → NULL); RIGHT ngược lại (SQLite mới hỗ trợ); CROSS là tích Descartes (mọi cặp).",
          points: [
            "INNER JOIN: chỉ lấy bản ghi có ở CẢ hai bảng (vd: đơn hàng CÓ khách hàng)",
            "LEFT JOIN: giữ tất cả bên trái, kể cả không có bên phải (vd: tất cả user, kèm đơn nếu có)",
            "Tìm 'mồ côi': LEFT JOIN ... WHERE right.id IS NULL",
            "CROSS JOIN hiếm dùng, dễ nổ số dòng — cẩn thận quên điều kiện ON",
          ],
          code: {
            lang: "sql",
            content: `-- INNER: chỉ user CÓ đơn hàng
SELECT u.name, o.total FROM user u
JOIN "order" o ON o.user_id = u.id;

-- LEFT: tất cả user, đơn có thể NULL
SELECT u.name, o.total FROM user u
LEFT JOIN "order" o ON o.user_id = u.id;

-- User CHƯA có đơn nào (tìm mồ côi)
SELECT u.name FROM user u
LEFT JOIN "order" o ON o.user_id = u.id
WHERE o.id IS NULL;`,
          },
        },
        {
          id: "db-groupby",
          name: "GROUP BY · HAVING · aggregate · subquery · CTE",
          level: "core",
          summary:
            "GROUP BY gộp dòng theo nhóm để tính COUNT/SUM/AVG/MIN/MAX. WHERE lọc TRƯỚC khi gộp, HAVING lọc SAU khi gộp. Subquery/CTE (WITH) giúp chia truy vấn phức tạp thành bước dễ đọc.",
          points: [
            "WHERE lọc dòng thô; HAVING lọc trên kết quả tổng hợp (vd: HAVING COUNT(*) > 5)",
            "CTE (WITH ... AS) đặt tên cho subquery → code dễ đọc, tái dùng, viết được đệ quy",
            "Subquery tương quan (correlated) chạy lại theo từng dòng → cẩn thận hiệu năng",
          ],
          code: {
            lang: "sql",
            content: `-- Khách hàng chi nhiều hơn 1 triệu — GROUP BY + HAVING
SELECT user_id, SUM(total) AS spent
FROM "order"
GROUP BY user_id
HAVING SUM(total) > 1000000;

-- CTE cho dễ đọc
WITH top_spender AS (
    SELECT user_id, SUM(total) AS spent
    FROM "order" GROUP BY user_id HAVING SUM(total) > 1000000
)
SELECT u.name, t.spent FROM top_spender t
JOIN user u ON u.id = t.user_id;`,
          },
        },
        {
          id: "db-window",
          name: "Window function (ROW_NUMBER, RANK, SUM OVER)",
          level: "focus",
          summary:
            "Tính toán trên một 'cửa sổ' các dòng liên quan MÀ KHÔNG gộp mất dòng — khác GROUP BY. Dùng để đánh số hạng, lấy 'top N mỗi nhóm', tính tổng luỹ kế (running total).",
          points: [
            "ROW_NUMBER() đánh số duy nhất; RANK() nhảy số khi bằng nhau; DENSE_RANK() không nhảy",
            "PARTITION BY = chia nhóm; ORDER BY bên trong OVER = thứ tự trong nhóm",
            "'Top N mỗi nhóm': ROW_NUMBER() OVER(PARTITION BY g ORDER BY x) rồi lọc rn <= N",
            "SUM() OVER(ORDER BY ...) = tổng luỹ kế; SQLite hỗ trợ từ 3.25+",
          ],
          code: {
            lang: "sql",
            content: `-- Đơn hàng đắt nhất của MỖI khách (top 1 mỗi nhóm)
WITH ranked AS (
    SELECT *,
      ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY total DESC) AS rn
    FROM "order"
)
SELECT * FROM ranked WHERE rn = 1;

-- Tổng luỹ kế theo thời gian
SELECT created_at, total,
  SUM(total) OVER (ORDER BY created_at) AS running_total
FROM "order";`,
          },
        },
        {
          id: "db-normalization",
          name: "Chuẩn hoá 1NF/2NF/3NF & khi nào phi chuẩn hoá",
          level: "core",
          summary:
            "Chuẩn hoá loại bỏ dữ liệu trùng lặp để tránh bất nhất khi cập nhật. 1NF: mỗi ô một giá trị nguyên tử. 2NF: bỏ phụ thuộc một phần vào khoá. 3NF: bỏ phụ thuộc bắc cầu. Đôi khi cố tình phi chuẩn hoá để đọc nhanh hơn.",
          points: [
            "1NF: không lưu list trong một cột (vd: 'tags' = 'a,b,c' là sai)",
            "2NF/3NF: mỗi cột không khoá phụ thuộc vào TOÀN BỘ khoá và chỉ vào khoá",
            "Phi chuẩn hoá: chấp nhận trùng lặp (vd: lưu sẵn count, tên đã join) để tránh JOIN nặng khi đọc",
            "Trên mobile offline-first, phi chuẩn hoá có kiểm soát khá phổ biến để render nhanh",
          ],
          code: {
            lang: "sql",
            content: `-- SAI 1NF: nhồi nhiều giá trị vào một cột
-- user(id, name, phones = "090..., 091...")

-- ĐÚNG: tách bảng con
CREATE TABLE user  (id INTEGER PRIMARY KEY, name TEXT);
CREATE TABLE phone (id INTEGER PRIMARY KEY,
                    user_id INTEGER REFERENCES user(id),
                    number TEXT);`,
          },
        },
        {
          id: "db-keys",
          name: "Khoá chính (PK) — định danh mỗi dòng",
          level: "core",
          summary:
            "Khoá chính định danh DUY NHẤT một dòng, không được NULL, không trùng. Trong SQLite, `INTEGER PRIMARY KEY` là bí danh của rowid (cột ẩn tự tăng) → cực nhanh khi tra theo id. Nên ưu tiên surrogate key (id tự sinh) hơn natural key (email, sđt) vì dữ liệu thật hay đổi.",
          points: [
            "PK phải: duy nhất + KHÔNG NULL + hầu như không đổi trong suốt đời dòng",
            "SQLite: `id INTEGER PRIMARY KEY` = bí danh rowid → tự tăng, tra id là O(log n)",
            "AUTOINCREMENT: chỉ để KHÔNG tái dùng lại id đã xoá — chậm & tốn hơn, thường KHÔNG cần",
            "Surrogate key (id số tự sinh) > natural key (email): natural key dễ đổi → phải sửa cả FK trỏ tới",
            "Khoá kép (composite PK): nhiều cột cùng làm khoá, dùng cho bảng trung gian n-n",
            "Room: `@PrimaryKey(autoGenerate = true) val id: Long = 0`",
          ],
          code: {
            lang: "sql",
            content: `-- INTEGER PRIMARY KEY = bí danh rowid (khuyên dùng)
CREATE TABLE movie (
    id    INTEGER PRIMARY KEY,   -- tự tăng, không cần AUTOINCREMENT
    title TEXT NOT NULL
);
INSERT INTO movie(title) VALUES ('Inception');  -- id tự sinh = 1

-- Khoá chính KÉP (composite) cho bảng n-n:
CREATE TABLE movie_cast (
    movie_id  INTEGER,
    person_id INTEGER,
    role      TEXT,
    PRIMARY KEY (movie_id, person_id, role)  -- bộ 3 phải là duy nhất
);`,
          },
        },
        {
          id: "db-fk",
          name: "Khoá ngoại (FK) & quan hệ 1-1 / 1-n / n-n",
          level: "core",
          summary:
            "Khoá ngoại là cột trỏ tới PK của bảng khác, giữ TOÀN VẸN THAM CHIẾU: không cho tạo dòng con trỏ tới cha không tồn tại, và quy định điều gì xảy ra khi xoá/sửa cha (ON DELETE / ON UPDATE). Lưu ý: SQLite mặc định TẮT kiểm tra FK — phải bật thủ công.",
          points: [
            "1-n: FK đặt ở bên 'nhiều' (vd movie.genre_id → genre.id: mỗi phim 1 thể loại)",
            "1-1: giống 1-n nhưng thêm UNIQUE lên cột FK để chặn nhân đôi",
            "n-n: KHÔNG có FK trực tiếp — tách bảng trung gian chứa 2 FK (vd watchlist)",
            "SQLite phải bật `PRAGMA foreign_keys = ON;` mỗi kết nối (Room bật sẵn)",
            "ON DELETE: CASCADE (xoá con theo), SET NULL (bỏ liên kết), RESTRICT/NO ACTION (chặn xoá cha)",
            "FK nên được đánh index — SQLite KHÔNG tự tạo, JOIN/CASCADE sẽ chậm nếu quên",
          ],
          code: {
            lang: "sql",
            content: `PRAGMA foreign_keys = ON;   -- BẮT BUỘC, nếu không FK bị bỏ qua

-- 1-n: mỗi phim thuộc 1 thể loại
CREATE TABLE genre (id INTEGER PRIMARY KEY, name TEXT);
CREATE TABLE movie (
    id       INTEGER PRIMARY KEY,
    title    TEXT NOT NULL,
    genre_id INTEGER REFERENCES genre(id) ON DELETE SET NULL
);
CREATE INDEX idx_movie_genre ON movie(genre_id);  -- nhớ index cho FK

-- n-n: user <-> movie qua bảng trung gian, xoá cha thì dọn liên kết
CREATE TABLE watchlist (
    user_id  INTEGER REFERENCES "user"(id) ON DELETE CASCADE,
    movie_id INTEGER REFERENCES movie(id)  ON DELETE CASCADE,
    PRIMARY KEY (user_id, movie_id)
);

-- Chèn con trỏ tới cha KHÔNG tồn tại -> lỗi FOREIGN KEY constraint failed
-- Xoá 1 movie -> mọi dòng watchlist của phim đó tự bay theo (CASCADE)`,
          },
        },
        {
          id: "db-dml",
          name: "INSERT · UPDATE · DELETE · UPSERT (sửa dữ liệu)",
          level: "core",
          summary:
            "3 câu lệnh thay đổi dữ liệu (DML). Điểm sống còn: UPDATE và DELETE mà QUÊN WHERE sẽ tác động TOÀN BỘ bảng. UPSERT (INSERT ... ON CONFLICT) là mẫu cực hay: chưa có thì thêm, có rồi thì cập nhật — tránh chạy 2 câu.",
          points: [
            "INSERT nhiều dòng một lần bằng nhiều bộ VALUES; hoặc INSERT ... SELECT để chép từ query",
            "⚠️ UPDATE / DELETE LUÔN kèm WHERE — thiếu WHERE là sửa/xoá sạch bảng",
            "UPDATE tăng dần: `SET views = views + 1` (đọc-ghi nguyên tử trong 1 câu)",
            "UPSERT: `INSERT ... ON CONFLICT(cột) DO UPDATE SET ...` — dùng `excluded.cột` để lấy giá trị định chèn",
            "RETURNING (SQLite 3.35+) trả về dòng vừa insert/update/delete",
            "Xoá cha có FK CASCADE → con tự xoá; nếu RESTRICT → phải xoá con trước",
            "Room: @Insert (onConflict = REPLACE), @Update, @Delete, hoặc @Query cho UPSERT tinh chỉnh",
          ],
          code: {
            lang: "sql",
            content: `-- INSERT: 1 dòng, nhiều dòng, và chép từ query
INSERT INTO genre(name) VALUES ('Sci-Fi');
INSERT INTO genre(name) VALUES ('Drama'), ('Horror');      -- nhiều dòng
INSERT INTO archive_movie SELECT * FROM movie WHERE year < 2000;

-- UPDATE: NHỚ WHERE (thiếu là sửa cả bảng!)
UPDATE movie SET rating = 8.8 WHERE id = 1;
UPDATE movie SET rating = rating + 0.1 WHERE genre_id = 2;  -- tăng dần

-- DELETE: NHỚ WHERE
DELETE FROM review WHERE score < 3 AND created_at < :old;

-- UPSERT: chưa có thì thêm, có rồi thì cập nhật cờ watched
INSERT INTO watchlist(user_id, movie_id, added_at, watched)
VALUES (:u, :m, :now, 1)
ON CONFLICT(user_id, movie_id)
DO UPDATE SET watched = 1;                    -- dùng excluded.* để lấy giá trị mới`,
          },
        },
      ],
    },
    {
      title: "Index & tối ưu truy vấn — phần 'phân biệt middle'",
      topics: [
        {
          id: "db-btree",
          name: "B-tree index hoạt động thế nào",
          level: "focus",
          summary:
            "Index là một cây cân bằng (B-tree) sắp xếp theo cột được đánh index → tìm kiếm O(log n) thay vì quét toàn bảng O(n). Đổi lại: mỗi INSERT/UPDATE/DELETE phải cập nhật thêm index nên GHI chậm hơn và tốn dung lượng.",
          points: [
            "Index tăng tốc ĐỌC (WHERE, JOIN, ORDER BY) nhưng làm CHẬM GHI",
            "Chỉ đánh index cột thường lọc/join/sắp xếp — không đánh bừa mọi cột",
            "PK tự có index; cột FK nên đánh index thủ công (SQLite không tự tạo)",
            "Index chọn lọc cao (nhiều giá trị khác nhau) mới hiệu quả; cột kiểu true/false ít tác dụng",
          ],
          code: {
            lang: "sql",
            content: `-- Tăng tốc lọc theo user_id
CREATE INDEX idx_order_user ON "order"(user_id);

-- Trade-off: đọc nhanh hơn, nhưng mỗi insert phải update index này.
-- Đừng đánh index vô tội vạ.`,
          },
          note: "Đây chính là chỗ hay được hỏi để phân biệt middle: 'vì sao query chậm', 'thêm index nào'.",
        },
        {
          id: "db-composite",
          name: "Composite index & quy tắc left-most prefix",
          level: "focus",
          summary:
            "Index nhiều cột (a, b, c) chỉ dùng được nếu query lọc từ TRÁI sang: dùng được a, (a,b), (a,b,c) nhưng KHÔNG dùng được nếu chỉ lọc b hoặc c. Thứ tự cột trong index cực kỳ quan trọng.",
          points: [
            "Index (a, b): dùng cho WHERE a=?, WHERE a=? AND b=?, KHÔNG cho WHERE b=?",
            "Đặt cột lọc bằng '=' trước, cột lọc theo range (>, <, BETWEEN) sau",
            "Một composite index đúng thứ tự thường thay được nhiều single index",
          ],
          code: {
            lang: "sql",
            content: `CREATE INDEX idx_order_user_time ON "order"(user_id, created_at);

-- ✅ Dùng index: lọc user_id trước
SELECT * FROM "order" WHERE user_id = 5 ORDER BY created_at DESC;

-- ❌ KHÔNG dùng được index trên (chỉ lọc created_at, thiếu prefix user_id)
SELECT * FROM "order" WHERE created_at > :t;`,
          },
        },
        {
          id: "db-covering",
          name: "Covering index",
          level: "focus",
          summary:
            "Nếu index chứa ĐỦ mọi cột mà query cần (cả SELECT lẫn WHERE), DB đọc thẳng từ index mà không cần chạm bảng gốc → nhanh hơn nữa. Gọi là 'index-only scan'.",
          points: [
            "Query chỉ lấy cột nằm trong index → không cần tra ngược về bảng (bỏ được 'bookmark lookup')",
            "Đánh đổi: index to hơn, ghi chậm hơn — chỉ làm cho query nóng, chạy nhiều",
            "EXPLAIN QUERY PLAN sẽ hiện 'USING COVERING INDEX'",
          ],
          code: {
            lang: "sql",
            content: `-- Query chỉ cần user_id + created_at
CREATE INDEX idx_cover ON "order"(user_id, created_at);

SELECT created_at FROM "order" WHERE user_id = 5;
-- => index đã chứa đủ dữ liệu, không cần đọc bảng gốc.`,
          },
        },
        {
          id: "db-explain",
          name: "Đọc EXPLAIN QUERY PLAN",
          level: "focus",
          summary:
            "Công cụ số 1 để biết query nhanh hay chậm. Nó cho biết DB dùng index hay đang 'SCAN TABLE' (quét toàn bảng — dấu hiệu cần index). Middle phải biết mở và đọc nó.",
          points: [
            "'SEARCH ... USING INDEX' = tốt; 'SCAN TABLE' = full-scan, cân nhắc thêm index",
            "'USING COVERING INDEX' = tốt nhất (index-only)",
            "'USE TEMP B-TREE FOR ORDER BY' = đang sắp xếp trong RAM, có thể thêm index để tránh",
            "Quy trình: viết query → EXPLAIN → thấy SCAN → thêm index → EXPLAIN lại xác nhận",
          ],
          code: {
            lang: "sql",
            content: `EXPLAIN QUERY PLAN
SELECT * FROM "order" WHERE user_id = 5 ORDER BY created_at DESC;

-- Trước khi có index:  SCAN TABLE order            (chậm)
-- Sau CREATE INDEX:    SEARCH order USING INDEX ... (nhanh)`,
          },
          note: "Câu tự chấm 'query này chậm, tại sao' được trả lời chính bằng công cụ này.",
        },
        {
          id: "db-nplus1",
          name: "Nhận diện & xử lý N+1 query",
          level: "focus",
          summary:
            "Anti-pattern kinh điển: chạy 1 query lấy danh sách N mục, rồi lặp N lần mỗi lần 1 query lấy chi tiết → tổng N+1 query, chậm khủng khiếp. Sửa bằng JOIN, IN(...), hoặc @Relation của Room (gộp còn 1–2 query).",
          points: [
            "Dấu hiệu: query nằm trong vòng lặp / gọi DB trong hàm map từng item",
            "Sửa: 1 query JOIN, hoặc WHERE id IN (danh sách), hoặc @Relation trong Room",
            "Cực hay gặp khi hiển thị list kèm dữ liệu con (bài viết + tác giả, đơn + sản phẩm)",
          ],
          code: {
            lang: "kotlin",
            content: `// ❌ N+1: mỗi post lại query author
val posts = dao.getPosts()                 // 1 query
posts.forEach { it.author = dao.getAuthor(it.authorId) } // N query

// ✅ Room @Relation gộp trong 1–2 query
data class PostWithAuthor(
    @Embedded val post: Post,
    @Relation(parentColumn = "authorId", entityColumn = "id")
    val author: Author
)`,
          },
        },
      ],
    },
    {
      title: "Transaction & tính đúng đắn",
      topics: [
        {
          id: "db-acid",
          name: "ACID — hiểu thực chất",
          level: "core",
          summary:
            "Bốn bảo đảm của transaction: Atomicity (toàn bộ hoặc không gì cả), Consistency (giữ ràng buộc dữ liệu), Isolation (giao dịch song song không dẫm chân nhau), Durability (đã commit là còn sau khi mất điện).",
          points: [
            "Atomicity: chuyển tiền trừ A cộng B — không được nửa vời; lỗi thì rollback tất",
            "Consistency: FK, UNIQUE, CHECK luôn đúng trước và sau transaction",
            "Isolation: mức cô lập quyết định giao dịch thấy dữ liệu của nhau ra sao",
            "Durability: sau COMMIT dữ liệu bền, kể cả crash ngay sau đó",
          ],
          code: {
            lang: "sql",
            content: `BEGIN TRANSACTION;
  UPDATE account SET balance = balance - 100 WHERE id = 1;
  UPDATE account SET balance = balance + 100 WHERE id = 2;
COMMIT;      -- cả hai cùng thành công
-- nếu lỗi giữa chừng => ROLLBACK, không ai mất/được tiền lệch`,
          },
        },
        {
          id: "db-isolation",
          name: "Isolation level · locking · mô hình SQLite",
          level: "focus",
          summary:
            "Mức cô lập cân bằng giữa đúng đắn và song song, chống các bất thường: dirty read, non-repeatable read, phantom read. SQLite đơn giản: mặc định SERIALIZABLE (mạnh nhất), khoá ở mức toàn database (không phải từng dòng).",
          points: [
            "Các bất thường: dirty read (đọc dữ liệu chưa commit), non-repeatable, phantom",
            "SQLite classic: nhiều reader HOẶC một writer — writer khoá cả DB",
            "Chế độ WAL cải thiện: reader và writer chạy song song (xem mục WAL)",
            "Vì khoá toàn DB nên tránh giữ transaction mở lâu trên Android",
          ],
        },
        {
          id: "db-wal",
          name: "WAL mode — vì sao tốt cho mobile",
          level: "focus",
          summary:
            "Write-Ahead Logging: thay vì ghi đè trực tiếp file DB, ghi thay đổi vào file log (-wal) trước. Nhờ đó READER không bị chặn bởi WRITER — đọc và ghi chạy đồng thời. Rất hợp app di động (UI đọc trong khi sync ghi nền).",
          points: [
            "Trước WAL: writer khoá DB → reader phải đợi (dễ giật UI khi đang sync)",
            "WAL: nhiều reader + một writer chạy song song → UI mượt hơn",
            "Room bật WAL mặc định trên API đủ mới; checkpoint gộp -wal về file chính định kỳ",
            "Đánh đổi: có thêm file -wal và -shm; cần checkpoint để tránh phình",
          ],
          code: {
            lang: "sql",
            content: `PRAGMA journal_mode = WAL;   -- bật WAL
PRAGMA synchronous = NORMAL; -- cân bằng an toàn/tốc độ với WAL
-- Room: journalMode(JournalMode.WRITE_AHEAD_LOGGING) — thường mặc định`,
          },
        },
      ],
    },
    {
      title: "SQLite & Room — thực chiến Android",
      topics: [
        {
          id: "db-sqlite",
          name: "SQLite: kiểu động, PRAGMA quan trọng, giới hạn",
          level: "core",
          summary:
            "SQLite dùng 'type affinity' — kiểu lỏng lẻo, một cột có thể chứa nhiều kiểu. Chỉ 5 storage class: NULL, INTEGER, REAL, TEXT, BLOB (không có kiểu Date/Boolean riêng). PRAGMA điều chỉnh hành vi engine.",
          points: [
            "Không có DATE/BOOLEAN → lưu bằng INTEGER (epoch millis / 0-1) hoặc TEXT (ISO-8601)",
            "PRAGMA hay dùng: foreign_keys=ON, journal_mode=WAL, user_version (migration)",
            "Giới hạn: 1 writer tại một thời điểm, kích thước, không phải server DB đầy đủ",
            "Là DB nhúng chạy in-process — không tách server, không network layer",
          ],
          code: {
            lang: "sql",
            content: `PRAGMA foreign_keys = ON;        -- bật ràng buộc FK
PRAGMA user_version;             -- số version dùng cho migration
-- Boolean lưu bằng INTEGER 0/1; Date lưu bằng INTEGER epoch millis`,
          },
        },
        {
          id: "db-room-basics",
          name: "Room: @Entity · @Dao · @Relation · @Embedded · TypeConverter",
          level: "focus",
          summary:
            "Room là lớp trừu tượng trên SQLite: sinh code truy vấn từ annotation, kiểm tra SQL lúc compile. @Entity=bảng, @Dao=nơi khai báo query, @Relation/@Embedded=map quan hệ, TypeConverter=chuyển kiểu không hỗ trợ (Date, enum, List).",
          points: [
            "@Entity định nghĩa bảng; @PrimaryKey(autoGenerate) cho id tự tăng",
            "@Dao chứa @Query/@Insert/@Update/@Delete; SQL kiểm tra tại compile-time (an toàn)",
            "@Embedded nhúng object phẳng vào cùng bảng; @Relation map 1-n/n-n tránh N+1",
            "TypeConverter: lưu Date↔Long, enum↔String, List↔JSON",
          ],
          code: {
            lang: "kotlin",
            content: `@Entity(tableName = "post")
data class Post(
    @PrimaryKey(autoGenerate = true) val id: Long = 0,
    val title: String,
    val authorId: Long,
    val createdAt: Long           // epoch millis
)

@Dao interface PostDao {
    @Query("SELECT * FROM post WHERE authorId = :id ORDER BY createdAt DESC")
    fun postsOf(id: Long): Flow<List<Post>>   // reactive

    @Insert suspend fun insert(post: Post): Long
}

class Converters {
    @TypeConverter fun toDate(v: Long?) = v?.let { Date(it) }
    @TypeConverter fun fromDate(d: Date?) = d?.time
}`,
          },
        },
        {
          id: "db-migration",
          name: "Migration thủ công + tự động + test migration",
          level: "focus",
          summary:
            "Khi đổi schema (thêm cột/bảng), phải viết Migration để user cũ không mất dữ liệu. Room hỗ trợ auto-migration cho thay đổi đơn giản, và migration thủ công (viết SQL ALTER) cho thay đổi phức tạp. Test migration hay bị bỏ qua nhưng cực quan trọng.",
          points: [
            "Tăng version DB mỗi lần đổi schema; cung cấp Migration(from, to)",
            "Auto-migration cho case đơn giản; thủ công cho đổi kiểu/tách bảng/backfill dữ liệu",
            "KHÔNG dùng fallbackToDestructiveMigration ở production (mất sạch dữ liệu user)",
            "MigrationTestHelper: tạo DB version cũ → chạy migration → assert schema & dữ liệu",
            "Nghĩ tới user nhảy nhiều version (1→4): Room ghép chuỗi migration liên tiếp",
          ],
          code: {
            lang: "kotlin",
            content: `val MIGRATION_1_2 = object : Migration(1, 2) {
    override fun migrate(db: SupportSQLiteDatabase) {
        db.execSQL("ALTER TABLE post ADD COLUMN pinned INTEGER NOT NULL DEFAULT 0")
    }
}

Room.databaseBuilder(ctx, AppDb::class.java, "app.db")
    .addMigrations(MIGRATION_1_2)   // đừng dùng fallbackToDestructive ở prod
    .build()`,
          },
          note: "Câu tự chấm: 'user đang ở version cũ 3 bản thì sao?' → migration liên tiếp + test đã cover.",
        },
        {
          id: "db-transaction-flow",
          name: "@Transaction + tích hợp Flow (reactive)",
          level: "core",
          summary:
            "@Transaction đảm bảo nhiều thao tác DAO chạy nguyên tử (all-or-nothing), cũng cần khi @Relation đọc nhiều bảng để tránh dữ liệu không nhất quán. Flow cho phép observe dữ liệu: DB đổi → Flow tự phát lại → UI cập nhật.",
          points: [
            "@Transaction cho ghi nhiều bước (insert cha + con) và cho @Relation nhiều query",
            "DAO trả Flow<T> → observe reactive; kết hợp Dispatchers.IO khi ghi/đọc nặng",
            "Flow từ Room chạy trên executor của Room, an toàn gọi từ viewModelScope",
          ],
          code: {
            lang: "kotlin",
            content: `@Dao interface OrderDao {
    @Transaction
    suspend fun placeOrder(order: Order, items: List<Item>) {
        val id = insertOrder(order)         // nếu insertItems lỗi
        insertItems(items.map { it.copy(orderId = id) }) // => rollback cả hai
    }
    @Query("SELECT * FROM \"order\" ORDER BY createdAt DESC")
    fun observeOrders(): Flow<List<Order>>  // reactive
}`,
          },
        },
        {
          id: "db-fts-paging",
          name: "Full-text search (FTS4/5) & phân trang Paging 3",
          level: "focus",
          summary:
            "FTS là bảng ảo đánh index đảo (inverted index) cho tìm kiếm văn bản nhanh (MATCH) thay vì LIKE '%...%' chậm. Paging 3 tải danh sách lớn theo trang, tích hợp Room (PagingSource) và RemoteMediator cho offline-first.",
          points: [
            "FTS5 nhanh hơn LIKE nhiều với văn bản dài; hỗ trợ prefix, ranking",
            "Room: @Fts4/@Fts5 trên entity + query MATCH",
            "Paging 3: DAO trả PagingSource<Int, T>; UI render PagingData",
            "RemoteMediator: DB là nguồn thật, network đổ thêm trang vào DB (offline-first)",
          ],
          code: {
            lang: "kotlin",
            content: `@Fts4 @Entity(tableName = "post_fts")
data class PostFts(val title: String, val body: String)

@Dao interface SearchDao {
    @Query("SELECT * FROM post_fts WHERE post_fts MATCH :q")
    suspend fun search(q: String): List<PostFts>

    @Query("SELECT * FROM post ORDER BY createdAt DESC")
    fun pagingSource(): PagingSource<Int, Post>   // cho Paging 3
}`,
          },
        },
        {
          id: "db-sqlcipher",
          name: "Mã hoá DB với SQLCipher (biết để dùng khi cần)",
          level: "extra",
          summary:
            "SQLCipher mã hoá toàn bộ file DB (AES-256) trong suốt với ứng dụng. Dùng khi lưu dữ liệu nhạy cảm (y tế, tài chính). Khoá mã hoá phải giữ an toàn trong Android Keystore, không hard-code.",
          points: [
            "Trong suốt: code Room gần như không đổi, chỉ cấu hình SupportFactory với passphrase",
            "Khoá lưu trong Keystore/EncryptedSharedPreferences, KHÔNG hard-code",
            "Đánh đổi hiệu năng nhỏ do mã hoá/giải mã — chỉ dùng khi thật cần",
          ],
        },
        {
          id: "db-dao-test",
          name: "Unit test cho DAO (in-memory database)",
          level: "focus",
          summary:
            "Test DAO bằng DB in-memory (Room.inMemoryDatabaseBuilder) — nhanh, tự huỷ sau test, không đụng file thật. Kết hợp runTest để test suspend/Flow. Đây là loại test cho giá trị cao nhất ở lớp data.",
          points: [
            "inMemoryDatabaseBuilder + allowMainThreadQueries (chỉ trong test)",
            "runTest để chạy suspend function; test cả query trả về đúng và thứ tự",
            "Test được @Relation, migration, ràng buộc UNIQUE/FK",
          ],
          code: {
            lang: "kotlin",
            content: `@Test fun insert_then_read() = runTest {
    val db = Room.inMemoryDatabaseBuilder(ctx, AppDb::class.java)
        .allowMainThreadQueries().build()
    val dao = db.postDao()

    dao.insert(Post(title = "Hi", authorId = 1, createdAt = 0))
    val first = dao.postsOf(1).first()       // đọc Flow một lần

    assertEquals(1, first.size)
    db.close()
}`,
          },
        },
      ],
    },
    {
      title: "Khái niệm hệ thống",
      topics: [
        {
          id: "db-system",
          name: "Caching · Single Source of Truth · Offline-first",
          level: "core",
          summary:
            "SSOT: DB local là nguồn sự thật duy nhất — UI luôn đọc từ DB, network chỉ để cập nhật DB. Nhờ đó app chạy được khi mất mạng (offline-first) và dữ liệu nhất quán trên mọi màn hình.",
          points: [
            "Luồng: UI ← Flow ← DB (Room) ← Repository ← Network (chỉ ghi vào DB)",
            "Offline-first: đọc DB trước, sync nền, hiển thị ngay cả khi offline",
            "Xử lý xung đột khi sync: last-write-wins, version/timestamp, hoặc merge theo field",
            "Cache đúng cách trả lời câu 'mất mạng thì dữ liệu đến từ đâu'",
          ],
          code: {
            lang: "kotlin",
            content: `// Repository: DB là nguồn thật, network chỉ cập nhật DB
fun observePosts(): Flow<List<Post>> = dao.observePosts()  // UI đọc DB

suspend fun refresh() {
    val fresh = api.getPosts()      // gọi mạng
    dao.upsertAll(fresh)            // ghi vào DB -> Flow tự phát lại -> UI update
}`,
          },
          note: "Đây là 'xương sống' của capstone: nối Phase 1 (DB) với Phase 2 (Network).",
        },
      ],
    },
  ],
};

/* ======================================================================
   TRỤ CỘT 3 — LẬP TRÌNH MẠNG  (chỉ TITLE ôn tập, chưa có nội dung)
   ====================================================================== */
const NET = {
  id: "net",
  icon: "🌐",
  title: "Lập trình mạng",
  color: "sky",
  tagline: "Phần này hiện chỉ là checklist ôn tập — nội dung chi tiết sẽ bổ sung sau (Phase 2).",
  titlesOnly: true,
  resources: [
    { name: "High Performance Browser Networking", note: "Ilya Grigorik — đọc miễn phí online", url: "https://hpbn.co" },
    { name: "OkHttp docs", note: "tài liệu chính thức", url: "https://square.github.io/okhttp/" },
    { name: "Retrofit docs", note: "tài liệu chính thức", url: "https://square.github.io/retrofit/" },
  ],
  sections: [
    {
      title: "Nền tảng (đừng bỏ qua)",
      items: [
        { id: "net-dns", name: "DNS phân giải thế nào" },
        { id: "net-tcp", name: "TCP/IP: bắt tay 3 bước, vì sao TCP đáng tin cậy" },
        { id: "net-tls", name: "TLS handshake, HTTPS bảo vệ dữ liệu ra sao" },
      ],
    },
    {
      title: "HTTP đào sâu",
      items: [
        { id: "net-methods", name: "Các method & idempotency (GET/PUT/DELETE vs POST)" },
        { id: "net-status", name: "Status code theo nhóm (2xx/3xx/4xx/5xx) & cách xử lý" },
        { id: "net-headers", name: "Header quan trọng: Content-Type, Authorization, Cache-Control, ETag" },
        { id: "net-http2", name: "HTTP/1.1 vs HTTP/2 (multiplexing) vs HTTP/3, keep-alive" },
      ],
    },
    {
      title: "REST & thiết kế API",
      items: [
        { id: "net-rest", name: "Nguyên tắc REST, thiết kế endpoint tốt, versioning" },
        { id: "net-api-paging", name: "Phân trang phía API (cursor vs offset)" },
      ],
    },
    {
      title: "OkHttp / Retrofit — hiểu bên dưới",
      items: [
        { id: "net-interceptor", name: "Interceptor (application vs network) — cực kỳ quan trọng" },
        { id: "net-pool", name: "Connection pooling, dispatcher, cache của OkHttp" },
        { id: "net-retrofit", name: "Retrofit chạy thế nào: converter, call adapter, sinh code" },
        { id: "net-error", name: "Xử lý lỗi tập trung, bọc kết quả bằng Result/sealed class" },
      ],
    },
    {
      title: "Auth & bảo mật",
      items: [
        { id: "net-oauth", name: "Token-based auth, OAuth2, refresh token (refresh khi 401 rồi retry)" },
        { id: "net-token-store", name: "Lưu token an toàn (EncryptedSharedPreferences / Keystore)" },
        { id: "net-pinning", name: "Certificate pinning, chống MITM" },
      ],
    },
    {
      title: "Resilience (thứ làm app 'production-grade')",
      items: [
        { id: "net-retry", name: "Timeout hợp lý, retry + exponential backoff" },
        { id: "net-circuit", name: "Ý tưởng circuit breaker" },
        { id: "net-cache", name: "Chiến lược cache HTTP (ETag, Cache-Control) + cache local" },
        { id: "net-offline", name: "Kiến trúc offline-first: đồng bộ, giải quyết xung đột" },
      ],
    },
    {
      title: "Mở rộng tầm nhìn (biết là đủ)",
      items: [
        { id: "net-ws", name: "WebSocket, Server-Sent Events, gRPC — khi nào dùng thay REST" },
      ],
    },
  ],
};

const PILLARS = [ALGO, DB, NET];

/* ======================================================================
   LỚP ÔN TẬP NỀN TẢNG (revise)
   ====================================================================== */
const REVISE = {
  intro:
    "Không phải học mới mà củng cố cho vững + có hệ thống thứ bạn đã dùng hằng ngày. Khác junior/middle nằm ở 'hiểu vì sao và tự bảo vệ được lựa chọn'. Ba nhóm này lồng vào các phase, không tốn thêm tuần riêng.",
  groups: [
    {
      id: "rev-component",
      icon: "🧩",
      title: "A. Android Components",
      color: "emerald",
      note: "Tập trung lifecycle/kiến trúc, bỏ qua UI theo gu của bạn.",
      items: [
        { id: "rev-comp-4", name: "4 component gốc: Activity, Service, BroadcastReceiver, ContentProvider — vai trò & khi nào dùng" },
        { id: "rev-comp-lifecycle", name: "Lifecycle Activity/Fragment; config change (xoay màn hình), process death & khôi phục state" },
        { id: "rev-comp-intent", name: "Intent (explicit/implicit), truyền dữ liệu, PendingIntent" },
        { id: "rev-comp-vm", name: "ViewModel — vì sao sống sót qua config change, SavedStateHandle" },
        { id: "rev-comp-livedata", name: "LiveData vs StateFlow (xu hướng chuyển sang StateFlow)" },
        { id: "rev-comp-work", name: "WorkManager — task nền đảm bảo chạy; phân biệt với coroutine thường & Service" },
        { id: "rev-comp-fg", name: "Foreground service & giới hạn chạy nền" },
        { id: "rev-comp-scope", name: "Lifecycle-aware components, lifecycleScope / viewModelScope" },
      ],
    },
    {
      id: "rev-coroutine",
      icon: "⚙️",
      title: "B. Coroutine & Flow",
      color: "sky",
      note: "Ôn kỹ nhất — xương sống, cả DB (Room + Flow) lẫn Network (suspend) đều dựa vào. Ôn ngay Phase 0.",
      items: [
        { id: "rev-co-structured", name: "Structured concurrency là gì, vì sao quan trọng" },
        { id: "rev-co-dispatcher", name: "CoroutineScope, CoroutineContext, Dispatchers (Main/IO/Default) — chọn đúng" },
        { id: "rev-co-suspend", name: "suspend function chạy thế nào dưới nắp (continuation)" },
        { id: "rev-co-job", name: "Job vs SupervisorJob, quan hệ cha-con, cancellation hợp tác" },
        { id: "rev-co-exception", name: "Xử lý exception: try/catch vs CoroutineExceptionHandler, vì sao cần SupervisorJob" },
        { id: "rev-co-async", name: "async/await, coroutineScope vs supervisorScope, withContext" },
        { id: "rev-co-flow", name: "Flow: cold flow, operator, flowOn, upstream/downstream" },
        { id: "rev-co-stateflow", name: "StateFlow vs SharedFlow — khác nhau & khi nào dùng" },
        { id: "rev-co-callback", name: "Chuyển callback → suspend bằng suspendCancellableCoroutine / callbackFlow" },
        { id: "rev-co-test", name: "Test coroutine: runTest, TestDispatcher, advanceUntilIdle" },
      ],
    },
    {
      id: "rev-pattern",
      icon: "🏛️",
      title: "C. Design Pattern + SOLID",
      color: "violet",
      note: "Lồng vào Phase 3 (Kiến trúc) — Clean Architecture chính là SOLID + pattern áp dụng.",
      items: [
        { id: "rev-solid-s", name: "S — Single Responsibility" },
        { id: "rev-solid-o", name: "O — Open/Closed" },
        { id: "rev-solid-l", name: "L — Liskov Substitution" },
        { id: "rev-solid-i", name: "I — Interface Segregation" },
        { id: "rev-solid-d", name: "D — Dependency Inversion (hiểu cái này là hiểu vì sao dùng DI/Hilt)" },
        { id: "rev-pat-creational", name: "Creational: Singleton (và vì sao lạm dụng là xấu), Factory, Builder" },
        { id: "rev-pat-structural", name: "Structural: Adapter, Decorator, Facade" },
        { id: "rev-pat-behavioral", name: "Behavioral: Observer (nền của LiveData/Flow), Strategy, State" },
        { id: "rev-pat-arch", name: "Kiến trúc: Repository, DI, MVVM/MVI, Use Case/Interactor" },
        { id: "rev-pat-principles", name: "Composition over inheritance, lập trình theo interface, nhận diện code smell" },
      ],
    },
  ],
  resources: [
    { name: "Refactoring Guru", note: "design pattern + SOLID có ví dụ", url: "https://refactoring.guru" },
    { name: "Kotlin Coroutines docs", note: "chính thức", url: "https://kotlinlang.org/docs/coroutines-overview.html" },
    { name: "Now in Android", note: "repo mẫu của Google — chuẩn component + kiến trúc", url: "https://github.com/android/nowinandroid" },
  ],
};

/* ======================================================================
   CAPSTONE
   ====================================================================== */
const CAPSTONE = {
  intro:
    "Một app đọc dữ liệu từ public API (phim / sách / bài viết), offline-first. UI làm tối giản — giá trị nằm ở lớp data/domain. Một project như thế, làm nghiêm túc, tự nó là bằng chứng bạn đã lên middle.",
  pillars: [
    { icon: "🗄️", title: "DB", text: "Nhiều bảng có quan hệ, index hợp lý, migration có test, FTS để search, phân trang Paging 3." },
    { icon: "🌐", title: "Network", text: "Retrofit + OkHttp, interceptor cho auth & logging, cache, retry/backoff, lỗi bằng sealed class." },
    { icon: "🔄", title: "Đồng bộ", text: "Single source of truth — DB là nguồn thật, network chỉ để cập nhật DB." },
    { icon: "⚙️", title: "Async", text: "Coroutine + Flow xuyên suốt, structured concurrency, huỷ đúng cách." },
    { icon: "🏛️", title: "Kiến trúc", text: "Clean Architecture (áp dụng SOLID), MVVM/MVI, Repository, Hilt, chia module." },
    { icon: "✅", title: "Test", text: "Test DAO, test repository (mock network), test coroutine với runTest." },
  ],
};

/* ======================================================================
   TỰ CHẤM "ĐÃ LÊN MIDDLE CHƯA"
   ====================================================================== */
const MILESTONES = [
  "\"Query này chậm, tại sao?\" → biết mở EXPLAIN QUERY PLAN, biết thêm index nào",
  "\"Vì sao dùng index này mà không dùng index kia?\"",
  "\"Token hết hạn giữa chừng thì luồng refresh + retry chạy ra sao?\"",
  "\"Vì sao chọn HashMap chứ không duyệt List ở đây?\" (và nói được độ phức tạp)",
  "\"App mất mạng thì dữ liệu đến từ đâu, đồng bộ lại thế nào?\"",
  "\"Migration DB này nếu user đang ở version cũ 3 bản thì sao?\"",
  "\"Vì sao dùng SupervisorJob ở đây? Coroutine con lỗi thì cái còn lại có bị huỷ không?\"",
  "\"StateFlow khác SharedFlow chỗ nào, sao chỗ này chọn cái kia?\"",
  "\"Class này đang vi phạm nguyên tắc SOLID nào? Refactor thế nào?\"",
  "\"Vì sao tách Repository ra interface rồi mới inject bằng Hilt?\" (Dependency Inversion)",
];

/* ======================================================================
   BỘ BÀI TẬP SQL / ROOM  (workbook — dùng chung 1 schema)
   Mỗi bài: id (tick "đã giải") · q (đề) · tags · hint · solution.
   ====================================================================== */
const WORKBOOK = {
  intro:
    "42 bài tập bám sát trụ cột Cơ sở dữ liệu, xếp từ dễ → khó theo 7 cấp — có hẳn một cấp riêng cho khoá chính/khoá ngoại và INSERT · UPDATE · DELETE. Tất cả dùng chung một schema 'ứng dụng xem phim' (giống ý tưởng capstone). Làm xong bấm ✓ để lưu tiến độ. Nên tự viết trước rồi mới mở lời giải.",
  schema: {
    note: "Dán DDL này vào DB Browser for SQLite (hoặc chạy trong Room) để luyện thực tế. Quan hệ: genre 1-n movie · movie n-n person (qua movie_cast) · user n-n movie (qua watchlist) · movie/user 1-n review.",
    relations: [
      "genre 1-n movie — mỗi phim thuộc 1 thể loại",
      "movie n-n person qua movie_cast — diễn viên & đạo diễn (role)",
      "user n-n movie qua watchlist — phim đã lưu, cờ watched",
      "movie 1-n review · user 1-n review — đánh giá & bình luận",
    ],
    sql: `-- Schema dùng chung cho toàn bộ bài tập (SQLite)
CREATE TABLE genre (
  id   INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE movie (
  id           INTEGER PRIMARY KEY,
  title        TEXT    NOT NULL,
  year         INTEGER NOT NULL,
  rating       REAL,                       -- điểm 0..10
  duration_min INTEGER,
  genre_id     INTEGER REFERENCES genre(id),
  created_at   INTEGER NOT NULL            -- epoch millis
);

CREATE TABLE person (
  id   INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE movie_cast (            -- bảng trung gian n-n
  movie_id  INTEGER REFERENCES movie(id),
  person_id INTEGER REFERENCES person(id),
  role      TEXT,                    -- 'actor' | 'director'
  PRIMARY KEY (movie_id, person_id, role)
);

CREATE TABLE "user" (
  id    INTEGER PRIMARY KEY,
  name  TEXT NOT NULL,
  email TEXT UNIQUE
);

CREATE TABLE watchlist (             -- user n-n movie
  user_id  INTEGER REFERENCES "user"(id),
  movie_id INTEGER REFERENCES movie(id),
  added_at INTEGER NOT NULL,
  watched  INTEGER NOT NULL DEFAULT 0,     -- 0/1
  PRIMARY KEY (user_id, movie_id)
);

CREATE TABLE review (
  id         INTEGER PRIMARY KEY,
  user_id    INTEGER REFERENCES "user"(id),
  movie_id   INTEGER REFERENCES movie(id),
  score      INTEGER NOT NULL,             -- 1..10
  comment    TEXT,
  created_at INTEGER NOT NULL
);`,
  },
  resources: [
    { name: "SQLBolt", note: "học SQL tương tác từ số 0", url: "https://sqlbolt.com" },
    { name: "SQLZoo", note: "bài tập cơ bản có editor sẵn", url: "https://sqlzoo.net" },
    { name: "LeetCode Database", note: "bài SQL kiểu phỏng vấn", url: "https://leetcode.com/problemset/database/" },
    { name: "PostgreSQL Exercises", note: "bộ bài JOIN/aggregate/window rất hay", url: "https://pgexercises.com" },
    { name: "DataLemur", note: "SQL interview từ công ty top", url: "https://datalemur.com" },
    { name: "Room testing (Android docs)", note: "test DAO & migration chính thức", url: "https://developer.android.com/training/data-storage/room/testing-db" },
  ],
  sets: [
    {
      level: "Cấp 1 — SELECT · WHERE · ORDER BY · LIMIT",
      diff: "easy",
      items: [
        {
          id: "ex-1", tags: ["WHERE", "ORDER BY"],
          q: "Lấy mọi phim ra mắt sau năm 2015, phim mới nhất lên đầu.",
          hint: "WHERE lọc năm, ORDER BY ... DESC để mới nhất trước.",
          solution: { lang: "sql", content: `SELECT * FROM movie
WHERE year > 2015
ORDER BY year DESC;` },
        },
        {
          id: "ex-2", tags: ["ORDER BY", "LIMIT"],
          q: "Lấy 10 phim rating cao nhất, chỉ hiện title và rating.",
          hint: "Chọn đúng 2 cột, sắp rating giảm dần, LIMIT 10.",
          solution: { lang: "sql", content: `SELECT title, rating FROM movie
ORDER BY rating DESC
LIMIT 10;` },
        },
        {
          id: "ex-3", tags: ["COUNT"],
          q: "Đếm tổng số phim trong DB.",
          hint: "Hàm tổng hợp COUNT(*).",
          solution: { lang: "sql", content: `SELECT COUNT(*) AS total FROM movie;` },
        },
        {
          id: "ex-4", tags: ["AND"],
          q: "Lấy các phim dài hơn 120 phút VÀ rating từ 8 trở lên.",
          hint: "Hai điều kiện nối bằng AND.",
          solution: { lang: "sql", content: `SELECT * FROM movie
WHERE duration_min > 120 AND rating >= 8;` },
        },
        {
          id: "ex-5", tags: ["DISTINCT"],
          q: "Liệt kê danh sách năm phát hành, không trùng, tăng dần.",
          hint: "DISTINCT loại trùng.",
          solution: { lang: "sql", content: `SELECT DISTINCT year FROM movie
ORDER BY year;` },
        },
        {
          id: "ex-6", tags: ["Pagination", "Keyset"],
          q: "Phân trang danh sách phim (20 phim/trang, mới nhất trước): (a) lấy TRANG 3 bằng OFFSET; (b) viết lại theo kiểu keyset cho trang tiếp theo. Nói vì sao keyset nhanh hơn ở trang sâu.",
          hint: "Trang 3 = bỏ 2 trang đầu → OFFSET 40. Keyset dùng mốc created_at của phần tử cuối trang trước.",
          solution: { lang: "sql", content: `-- (a) OFFSET: đơn giản, nhưng trang càng sâu càng chậm
SELECT * FROM movie
ORDER BY created_at DESC
LIMIT 20 OFFSET 40;          -- trang 3

-- (b) Keyset: chỉ "seek" tới mốc, dùng index -> nhanh & ổn định
SELECT * FROM movie
WHERE created_at < :lastSeenCreatedAt
ORDER BY created_at DESC
LIMIT 20;
-- OFFSET vẫn phải quét & bỏ 40 dòng; keyset nhảy thẳng nhờ index.` },
        },
      ],
    },
    {
      level: "Cấp 2 — Khoá chính · khoá ngoại · INSERT / UPDATE / DELETE",
      diff: "easy",
      items: [
        {
          id: "ex-35", tags: ["INSERT"],
          q: "Thêm 1 thể loại tên 'Sci-Fi' vào bảng genre (để id tự sinh). Rồi thêm 3 thể loại 'Drama', 'Horror', 'Comedy' bằng MỘT câu lệnh.",
          hint: "Không liệt kê id để nó tự tăng theo rowid. Nhiều dòng = nhiều bộ VALUES.",
          solution: { lang: "sql", content: `-- 1 dòng (id tự sinh)
INSERT INTO genre(name) VALUES ('Sci-Fi');

-- 3 dòng trong một câu
INSERT INTO genre(name) VALUES
  ('Drama'),
  ('Horror'),
  ('Comedy');` },
        },
        {
          id: "ex-36", tags: ["INSERT", "FK"],
          q: "Thêm 1 phim 'Inception' năm 2010, rating 8.8, thuộc thể loại 'Sci-Fi'. Không hard-code id thể loại — lấy đúng genre_id từ tên.",
          hint: "Dùng subquery lấy id của Sci-Fi để đặt vào genre_id. created_at có thể để 0.",
          solution: { lang: "sql", content: `INSERT INTO movie(title, year, rating, genre_id, created_at)
VALUES (
  'Inception',
  2010,
  8.8,
  (SELECT id FROM genre WHERE name = 'Sci-Fi'),
  0
);` },
        },
        {
          id: "ex-37", tags: ["UPDATE", "WHERE"],
          q: "Cập nhật rating của phim id = 1 thành 9.0. Giải thích chuyện gì xảy ra nếu QUÊN mệnh đề WHERE.",
          hint: "UPDATE ... SET ... WHERE id = 1. Thiếu WHERE = sửa cả bảng.",
          solution: { lang: "sql", content: `UPDATE movie SET rating = 9.0 WHERE id = 1;

-- ⚠️ Nếu quên WHERE:
-- UPDATE movie SET rating = 9.0;
-- -> MỌI phim bị đổi rating = 9.0. Không undo được nếu ngoài transaction.
-- Thói quen an toàn: viết WHERE TRƯỚC, hoặc SELECT thử cùng WHERE để đếm số dòng.` },
        },
        {
          id: "ex-38", tags: ["UPDATE", "biểu thức"],
          q: "Cộng thêm 0.2 vào rating cho tất cả phim thuộc thể loại 'Horror' (dùng chính giá trị cột, không set số cứng).",
          hint: "SET rating = rating + 0.2, lọc genre_id qua subquery theo tên.",
          solution: { lang: "sql", content: `UPDATE movie
SET rating = rating + 0.2
WHERE genre_id = (SELECT id FROM genre WHERE name = 'Horror');` },
        },
        {
          id: "ex-39", tags: ["DELETE", "WHERE"],
          q: "Xoá mọi review có score < 3 VÀ cũ hơn mốc thời gian :old. Vì sao DELETE không WHERE lại nguy hiểm?",
          hint: "DELETE FROM review WHERE ... — hai điều kiện nối bằng AND.",
          solution: { lang: "sql", content: `DELETE FROM review
WHERE score < 3 AND created_at < :old;

-- ⚠️ DELETE FROM review;  -> xoá SẠCH bảng (mọi dòng).
-- Mẹo: chạy 'SELECT COUNT(*) FROM review WHERE ...' trước để biết
-- sẽ xoá bao nhiêu dòng, rồi mới đổi thành DELETE.` },
        },
        {
          id: "ex-40", tags: ["UPSERT", "ON CONFLICT"],
          q: "User :u bấm lưu phim :m vào watchlist. Nếu chưa có thì thêm mới; nếu đã có thì chỉ cập nhật watched = 1. Viết bằng MỘT câu UPSERT.",
          hint: "INSERT ... ON CONFLICT(khoá) DO UPDATE SET ... Khoá chính watchlist là (user_id, movie_id).",
          solution: { lang: "sql", content: `INSERT INTO watchlist(user_id, movie_id, added_at, watched)
VALUES (:u, :m, :now, 1)
ON CONFLICT(user_id, movie_id) DO UPDATE SET
  watched = 1;

-- excluded.* = giá trị định chèn; ví dụ giữ added_at cũ nhưng
-- ghi đè watched: DO UPDATE SET watched = excluded.watched;` },
        },
        {
          id: "ex-41", tags: ["FK", "ON DELETE CASCADE"],
          q: "Thiết kế lại bảng watchlist sao cho khi XOÁ một user thì mọi dòng watchlist của họ tự biến mất. Bật kiểm tra khoá ngoại và giải thích.",
          hint: "REFERENCES ... ON DELETE CASCADE + PRAGMA foreign_keys = ON.",
          solution: { lang: "sql", content: `PRAGMA foreign_keys = ON;   -- SQLite mặc định TẮT, phải bật

CREATE TABLE watchlist (
  user_id  INTEGER REFERENCES "user"(id) ON DELETE CASCADE,
  movie_id INTEGER REFERENCES movie(id)  ON DELETE CASCADE,
  added_at INTEGER NOT NULL,
  watched  INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, movie_id)
);

-- DELETE FROM "user" WHERE id = :u;
-- -> CASCADE tự xoá mọi watchlist có user_id = :u.
-- Không bật PRAGMA thì CASCADE bị bỏ qua -> để lại 'rác' trỏ tới user đã xoá.` },
        },
        {
          id: "ex-42", tags: ["Composite PK", "chống trùng"],
          q: "Bảng movie_cast (diễn viên/đạo diễn của phim) phải chặn việc thêm TRÙNG cùng một (phim, người, vai). Chọn khoá chính phù hợp và thử insert trùng để thấy DB chặn.",
          hint: "Khoá chính KÉP gồm cả 3 cột movie_id, person_id, role.",
          solution: { lang: "sql", content: `CREATE TABLE movie_cast (
  movie_id  INTEGER REFERENCES movie(id),
  person_id INTEGER REFERENCES person(id),
  role      TEXT,                       -- 'actor' | 'director'
  PRIMARY KEY (movie_id, person_id, role)   -- bộ 3 là duy nhất
);

INSERT INTO movie_cast VALUES (1, 7, 'actor');
INSERT INTO movie_cast VALUES (1, 7, 'actor');
-- -> Lỗi: UNIQUE constraint failed (đã chặn trùng nhờ khoá kép)` },
        },
      ],
    },
    {
      level: "Cấp 3 — JOIN (4 loại)",
      diff: "easy",
      items: [
        {
          id: "ex-7", tags: ["INNER JOIN"],
          q: "Lấy title phim kèm tên thể loại của nó.",
          hint: "INNER JOIN movie với genre theo genre_id.",
          solution: { lang: "sql", content: `SELECT m.title, g.name AS genre
FROM movie m
JOIN genre g ON g.id = m.genre_id;` },
        },
        {
          id: "ex-8", tags: ["LEFT JOIN", "COUNT"],
          q: "Đếm số phim của MỖI thể loại, kể cả thể loại chưa có phim nào (hiện 0).",
          hint: "LEFT JOIN để giữ mọi genre; dùng COUNT(m.id) chứ không COUNT(*) để genre rỗng ra 0.",
          solution: { lang: "sql", content: `SELECT g.name, COUNT(m.id) AS movies
FROM genre g
LEFT JOIN movie m ON m.genre_id = g.id
GROUP BY g.id
ORDER BY movies DESC;
-- COUNT(*) sẽ đếm cả dòng NULL -> genre rỗng ra 1 (sai).` },
        },
        {
          id: "ex-9", tags: ["LEFT JOIN", "Anti-join"],
          q: "Tìm các thể loại CHƯA có phim nào (mồ côi).",
          hint: "LEFT JOIN rồi lọc WHERE bên phải IS NULL.",
          solution: { lang: "sql", content: `SELECT g.name
FROM genre g
LEFT JOIN movie m ON m.genre_id = g.id
WHERE m.id IS NULL;` },
        },
        {
          id: "ex-10", tags: ["JOIN nhiều bảng", "n-n"],
          q: "Lấy title phim kèm tên ĐẠO DIỄN (role = 'director').",
          hint: "movie → movie_cast (lọc role) → person, hai lần JOIN.",
          solution: { lang: "sql", content: `SELECT m.title, p.name AS director
FROM movie m
JOIN movie_cast c ON c.movie_id = m.id AND c.role = 'director'
JOIN person p ON p.id = c.person_id;` },
        },
        {
          id: "ex-11", tags: ["JOIN", "watchlist"],
          q: "Lấy các phim mà user id = 1 đã thêm vào watchlist nhưng CHƯA xem.",
          hint: "JOIN watchlist với movie, lọc user_id = 1 AND watched = 0.",
          solution: { lang: "sql", content: `SELECT m.title
FROM watchlist w
JOIN movie m ON m.id = w.movie_id
WHERE w.user_id = 1 AND w.watched = 0;` },
        },
      ],
    },
    {
      level: "Cấp 4 — GROUP BY · HAVING · Aggregate",
      diff: "medium",
      items: [
        {
          id: "ex-12", tags: ["GROUP BY", "AVG"],
          q: "Tính rating trung bình theo TỪNG thể loại.",
          hint: "JOIN genre, GROUP BY genre, AVG(rating).",
          solution: { lang: "sql", content: `SELECT g.name, ROUND(AVG(m.rating), 2) AS avg_rating
FROM movie m
JOIN genre g ON g.id = m.genre_id
GROUP BY g.id
ORDER BY avg_rating DESC;` },
        },
        {
          id: "ex-13", tags: ["HAVING"],
          q: "Chỉ lấy các thể loại có NHIỀU HƠN 5 phim.",
          hint: "Lọc trên kết quả tổng hợp → dùng HAVING, không phải WHERE.",
          solution: { lang: "sql", content: `SELECT g.name, COUNT(*) AS c
FROM movie m
JOIN genre g ON g.id = m.genre_id
GROUP BY g.id
HAVING COUNT(*) > 5;` },
        },
        {
          id: "ex-14", tags: ["LEFT JOIN", "GROUP BY"],
          q: "Với mỗi phim, tính điểm review trung bình và số lượng review (phim chưa có review vẫn hiện, số = 0).",
          hint: "LEFT JOIN review, GROUP BY movie, AVG + COUNT.",
          solution: { lang: "sql", content: `SELECT m.title,
       ROUND(AVG(r.score), 1) AS avg_score,
       COUNT(r.id)            AS reviews
FROM movie m
LEFT JOIN review r ON r.movie_id = m.id
GROUP BY m.id;` },
        },
        {
          id: "ex-15", tags: ["GROUP BY", "TOP N"],
          q: "Tìm 5 user viết nhiều review nhất.",
          hint: "GROUP BY user, COUNT(*), ORDER BY DESC, LIMIT 5.",
          solution: { lang: "sql", content: `SELECT u.name, COUNT(*) AS n
FROM review r
JOIN "user" u ON u.id = r.user_id
GROUP BY u.id
ORDER BY n DESC
LIMIT 5;` },
        },
        {
          id: "ex-16", tags: ["SUM", "GROUP BY"],
          q: "Tổng thời lượng phim (đổi ra GIỜ) theo từng năm.",
          hint: "SUM(duration_min)/60.0, GROUP BY year.",
          solution: { lang: "sql", content: `SELECT year, ROUND(SUM(duration_min) / 60.0, 1) AS hours
FROM movie
GROUP BY year
ORDER BY year;` },
        },
      ],
    },
    {
      level: "Cấp 5 — Subquery · CTE · Window function",
      diff: "medium",
      items: [
        {
          id: "ex-17", tags: ["Subquery"],
          q: "Tìm các phim có rating CAO HƠN rating trung bình của toàn bộ phim.",
          hint: "Subquery tính AVG rồi so sánh trong WHERE.",
          solution: { lang: "sql", content: `SELECT title, rating
FROM movie
WHERE rating > (SELECT AVG(rating) FROM movie)
ORDER BY rating DESC;` },
        },
        {
          id: "ex-18", tags: ["CTE"],
          q: "Dùng CTE: lấy 3 thể loại có nhiều phim nhất, rồi liệt kê các phim thuộc 3 thể loại đó.",
          hint: "WITH top_genre AS (...) rồi JOIN movie vào top_genre.",
          solution: { lang: "sql", content: `WITH top_genre AS (
    SELECT genre_id, COUNT(*) AS c
    FROM movie
    GROUP BY genre_id
    ORDER BY c DESC
    LIMIT 3
)
SELECT g.name, m.title
FROM movie m
JOIN top_genre t ON t.genre_id = m.genre_id
JOIN genre g     ON g.id = m.genre_id
ORDER BY g.name;` },
        },
        {
          id: "ex-19", tags: ["Window", "ROW_NUMBER"],
          q: "Lấy phim có rating cao nhất trong MỖI thể loại (top 1 mỗi nhóm).",
          hint: "ROW_NUMBER() OVER (PARTITION BY genre_id ORDER BY rating DESC) rồi lọc = 1.",
          solution: { lang: "sql", content: `WITH ranked AS (
    SELECT title, genre_id, rating,
           ROW_NUMBER() OVER (
               PARTITION BY genre_id ORDER BY rating DESC
           ) AS rn
    FROM movie
)
SELECT * FROM ranked WHERE rn = 1;` },
        },
        {
          id: "ex-20", tags: ["Window", "Running total"],
          q: "Tính số phim TÍCH LUỸ theo thời gian thêm vào (running total theo created_at).",
          hint: "COUNT(*) OVER (ORDER BY created_at).",
          solution: { lang: "sql", content: `SELECT id, created_at,
       COUNT(*) OVER (ORDER BY created_at) AS movies_so_far
FROM movie
ORDER BY created_at;` },
        },
        {
          id: "ex-21", tags: ["Window", "DENSE_RANK"],
          q: "Tìm phim đứng HẠNG 2 về rating trong mỗi thể loại.",
          hint: "DENSE_RANK() theo rating DESC trong từng partition, lọc = 2.",
          solution: { lang: "sql", content: `WITH r AS (
    SELECT title, genre_id, rating,
           DENSE_RANK() OVER (
               PARTITION BY genre_id ORDER BY rating DESC
           ) AS dr
    FROM movie
)
SELECT * FROM r WHERE dr = 2;` },
        },
        {
          id: "ex-22", tags: ["Window", "latest per group"],
          q: "Lấy review MỚI NHẤT của mỗi user.",
          hint: "ROW_NUMBER() PARTITION BY user_id ORDER BY created_at DESC, lọc = 1.",
          solution: { lang: "sql", content: `WITH r AS (
    SELECT *,
           ROW_NUMBER() OVER (
               PARTITION BY user_id ORDER BY created_at DESC
           ) AS rn
    FROM review
)
SELECT * FROM r WHERE rn = 1;` },
        },
      ],
    },
    {
      level: "Cấp 6 — Index & EXPLAIN (phân tích / thiết kế)",
      diff: "hard",
      items: [
        {
          id: "ex-23", tags: ["Composite index", "EXPLAIN"],
          q: "Query \"SELECT * FROM review WHERE movie_id = ? ORDER BY created_at DESC\" chạy chậm, EXPLAIN QUERY PLAN báo SCAN TABLE. Đề xuất index và giải thích nó sửa cả lọc lẫn sắp xếp thế nào.",
          hint: "Composite index (movie_id, created_at): cột lọc '=' trước, cột sort sau.",
          solution: { lang: "sql", content: `CREATE INDEX idx_review_movie_time
ON review(movie_id, created_at);

-- Vì sao hiệu quả:
-- 1) movie_id = ? dùng phần đầu index (equality) -> hết SCAN.
-- 2) created_at nằm ngay sau, đã sắp sẵn trong index
--    -> bỏ luôn bước "USE TEMP B-TREE FOR ORDER BY".
-- EXPLAIN sau khi thêm: SEARCH review USING INDEX idx_review_movie_time` },
        },
        {
          id: "ex-24", tags: ["Selectivity"],
          q: "Có nên đánh index cho cột watched (chỉ nhận 0/1) trong bảng watchlist không? Vì sao?",
          hint: "Nghĩ về selectivity (độ chọn lọc) và chi phí ghi.",
          solution: { lang: "sql", content: `-- Thường KHÔNG nên: watched chỉ 2 giá trị -> selectivity rất thấp,
-- một giá trị có thể chiếm ~nửa bảng, optimizer vẫn chọn scan.
-- Index vẫn làm chậm INSERT/UPDATE và tốn dung lượng.

-- Ngoại lệ hữu ích:
-- (a) partial index khi một giá trị RẤT hiếm:
CREATE INDEX idx_unwatched ON watchlist(user_id)
WHERE watched = 0;
-- (b) hoặc làm cột phụ trong composite: (user_id, watched).` },
        },
        {
          id: "ex-25", tags: ["Covering index"],
          q: "Query \"SELECT created_at FROM review WHERE movie_id = ?\" cực nóng. Thiết kế covering index để đọc thẳng từ index (index-only scan).",
          hint: "Index chứa ĐỦ cả cột lọc lẫn cột SELECT thì khỏi chạm bảng.",
          solution: { lang: "sql", content: `CREATE INDEX idx_review_cover
ON review(movie_id, created_at);

-- Index đã chứa movie_id (lọc) + created_at (select)
-- -> không cần tra ngược về bảng gốc.
-- EXPLAIN: SEARCH review USING COVERING INDEX idx_review_cover` },
        },
        {
          id: "ex-26", tags: ["Left-most prefix"],
          q: "Đã có index composite (year, rating). Với 4 query dưới, cái nào DÙNG được index, cái nào KHÔNG? Giải thích.\n1) WHERE year = 2020\n2) WHERE year = 2020 AND rating > 8\n3) WHERE rating > 8\n4) WHERE year = 2020 ORDER BY rating",
          hint: "Quy tắc left-most prefix: phải dùng cột trái nhất trước.",
          solution: { lang: "sql", content: `-- 1) ✅ dùng được (khớp prefix 'year')
-- 2) ✅ dùng được (year=  rồi rating range, đúng thứ tự)
-- 3) ❌ KHÔNG (thiếu prefix 'year' -> bỏ qua index)
-- 4) ✅ dùng được: year= để lọc, rating đã sắp sẵn trong index
--     nên ORDER BY rating khỏi cần sort thêm.` },
        },
        {
          id: "ex-27", tags: ["N+1", "@Relation"],
          q: "Đoạn code sau bị N+1 (1 query list + N query genre). Sửa bằng (a) 1 câu SQL JOIN, và (b) Room @Relation.",
          hint: "Gộp thành 1 truy vấn thay vì lặp gọi DB trong vòng for.",
          solution: { lang: "kotlin", content: `// ❌ N+1
val movies = dao.getMovies()                    // 1 query
movies.forEach { it.genre = dao.getGenre(it.genreId) } // N query

// ✅ (a) SQL: 1 query JOIN
// SELECT m.*, g.name FROM movie m JOIN genre g ON g.id = m.genre_id;

// ✅ (b) Room @Relation (gộp còn 1-2 query nội bộ)
data class MovieWithGenre(
    @Embedded val movie: Movie,
    @Relation(parentColumn = "genre_id", entityColumn = "id")
    val genre: Genre
)
@Transaction
@Query("SELECT * FROM movie")
fun moviesWithGenre(): Flow<List<MovieWithGenre>>` },
        },
      ],
    },
    {
      level: "Cấp 7 — Transaction · SQLite · Room (thực chiến)",
      diff: "hard",
      items: [
        {
          id: "ex-28", tags: ["Transaction"],
          q: "Khi user xem xong 1 phim: đặt watched = 1 trong watchlist VÀ thêm 1 review — cả hai phải cùng thành công hoặc cùng rollback. Viết bằng SQL và bằng Room @Transaction.",
          hint: "Bọc 2 thao tác trong 1 transaction; ở Room dùng suspend fun @Transaction.",
          solution: { lang: "kotlin", content: `-- SQL
-- BEGIN;
--   UPDATE watchlist SET watched = 1 WHERE user_id = :u AND movie_id = :m;
--   INSERT INTO review(user_id, movie_id, score, comment, created_at)
--     VALUES (:u, :m, :score, :comment, :now);
-- COMMIT;   -- lỗi giữa chừng -> ROLLBACK cả hai

// Room
@Transaction
suspend fun finishWatching(u: Long, m: Long, review: Review) {
    markWatched(u, m)     // UPDATE watchlist
    insertReview(review)  // nếu ném exception -> rollback luôn markWatched
}` },
        },
        {
          id: "ex-29", tags: ["Room", "@Relation", "Flow"],
          q: "Thiết kế Room entity cho movie + genre (quan hệ 1-n) và viết DAO trả Flow<List<MovieWithGenre>> sắp theo rating giảm dần.",
          hint: "@Entity + ForeignKey, @Embedded + @Relation, @Transaction + Flow.",
          solution: { lang: "kotlin", content: `@Entity data class Genre(
    @PrimaryKey val id: Long, val name: String)

@Entity(foreignKeys = [ForeignKey(
    entity = Genre::class,
    parentColumns = ["id"], childColumns = ["genre_id"])])
data class Movie(
    @PrimaryKey val id: Long,
    val title: String,
    @ColumnInfo(name = "genre_id", index = true) val genreId: Long,
    val rating: Double?)

data class MovieWithGenre(
    @Embedded val movie: Movie,
    @Relation(parentColumn = "genre_id", entityColumn = "id")
    val genre: Genre)

@Dao interface MovieDao {
    @Transaction
    @Query("SELECT * FROM Movie ORDER BY rating DESC")
    fun observe(): Flow<List<MovieWithGenre>>
}` },
        },
        {
          id: "ex-30", tags: ["Migration", "Test"],
          q: "Viết Migration thêm cột poster_url (TEXT) cho bảng movie (v1 → v2), kèm khung test migration.",
          hint: "ALTER TABLE ... ADD COLUMN; test bằng MigrationTestHelper.",
          solution: { lang: "kotlin", content: `val MIGRATION_1_2 = object : Migration(1, 2) {
    override fun migrate(db: SupportSQLiteDatabase) {
        db.execSQL("ALTER TABLE movie ADD COLUMN poster_url TEXT")
    }
}

// Test
@get:Rule val helper = MigrationTestHelper(
    InstrumentationRegistry.getInstrumentation(), AppDb::class.java)

@Test fun migrate1To2_keepsData() {
    helper.createDatabase(TEST_DB, 1).apply {
        execSQL("INSERT INTO movie(id,title,year,created_at) " +
                "VALUES (1,'A',2020,0)")
        close()
    }
    val db = helper.runMigrationsAndValidate(
        TEST_DB, 2, true, MIGRATION_1_2)
    // assert: cột poster_url tồn tại & dữ liệu cũ (id=1) còn nguyên
}` },
        },
        {
          id: "ex-31", tags: ["TypeConverter"],
          q: "Viết TypeConverter để Room lưu được List<String> (tags) và Date.",
          hint: "List ↔ chuỗi nối; Date ↔ Long epoch.",
          solution: { lang: "kotlin", content: `class Converters {
    @TypeConverter fun tagsToStr(t: List<String>?): String? =
        t?.joinToString("|")
    @TypeConverter fun strToTags(s: String?): List<String> =
        s?.split("|")?.filter { it.isNotEmpty() } ?: emptyList()

    @TypeConverter fun dateToLong(d: Date?): Long? = d?.time
    @TypeConverter fun longToDate(v: Long?): Date? = v?.let { Date(it) }
}
// @Database(..., ) + @TypeConverters(Converters::class)` },
        },
        {
          id: "ex-32", tags: ["FTS"],
          q: "Bật full-text search cho title + overview của phim và viết query MATCH tìm 'inception'.",
          hint: "@Fts4 entity + query WHERE table MATCH :q.",
          solution: { lang: "kotlin", content: `@Fts4
@Entity(tableName = "movie_fts")
data class MovieFts(val title: String, val overview: String)

@Dao interface SearchDao {
    @Query("SELECT * FROM movie_fts WHERE movie_fts MATCH :q")
    suspend fun search(q: String): List<MovieFts>
}
// dao.search("inception")   // nhanh hơn LIKE '%inception%' nhiều` },
        },
        {
          id: "ex-33", tags: ["Test DAO", "runTest"],
          q: "Viết unit test DAO dùng DB in-memory: insert 2 phim rating 7.0 và 9.0, rồi assert query trả phim rating cao nhất trước.",
          hint: "Room.inMemoryDatabaseBuilder + runTest + Flow.first().",
          solution: { lang: "kotlin", content: `@Test fun ordersByRatingDesc() = runTest {
    val db = Room.inMemoryDatabaseBuilder(ctx, AppDb::class.java)
        .allowMainThreadQueries().build()
    val dao = db.movieDao()

    dao.insert(Movie(1, "A", genreId = 1, rating = 7.0))
    dao.insert(Movie(2, "B", genreId = 1, rating = 9.0))

    val top = dao.observe().first()          // đọc Flow 1 lần
    assertEquals("B", top.first().movie.title)  // rating cao nhất trước
    db.close()
}` },
        },
        {
          id: "ex-34", tags: ["Migration", "Thiết kế"],
          q: "Câu hỏi thiết kế: user đang ở DB version 1, bạn đã phát hành tới version 4. Room chạy migration thế nào? Cần chuẩn bị gì để không crash?",
          hint: "Room ghép chuỗi migration liên tiếp; giữ đủ mắt xích + test.",
          solution: { lang: "kotlin", content: `// Room tự CHẠY TUẦN TỰ: 1->2 ->3 ->4 (dùng các Migration bạn cung cấp),
// hoặc dùng thẳng Migration(1,4) nếu bạn định nghĩa đường tắt.

// Cần chuẩn bị:
// 1. GIỮ đủ mọi Migration cũ trong code (đừng xoá 1->2, 2->3...).
// 2. Test từng bước migration (MigrationTestHelper).
// 3. Cân nhắc @AutoMigration cho thay đổi đơn giản.
// 4. KHÔNG dùng fallbackToDestructiveMigration ở prod (mất data).
// Thiếu 1 mắt xích -> IllegalStateException khi mở DB.` },
        },
      ],
    },
  ],
};

/* ======================================================================
   MẸO HỌC (hiển thị trong bong bóng nổi)
   ====================================================================== */
const STUDY_TIPS = [
  { icon: "🔁", text: "Đều đặn 30'/ngày ăn đứt học dồn cuối tuần. Giữ chuỗi ngày liên tiếp — đừng để đứt lửa 🔥." },
  { icon: "🔨", text: "Học xong lý thuyết là áp ngay vào capstone: học index → tối ưu một query thật ngay hôm đó." },
  { icon: "✍️", text: "Ghi chú bằng lời của chính mình. Viết ra được thì mới thật sự hiểu." },
  { icon: "⏳", text: "Sai một bài LeetCode? Xem lời giải, hiểu pattern, rồi làm lại chính bài đó sau 3 ngày." },
  { icon: "❓", text: "Luôn hỏi 'tại sao' chứ không chỉ 'làm thế nào' — đó chính là ranh giới junior → middle." },
  { icon: "🎯", text: "Mỗi lúc chỉ tập trung 1 chủ đề chính. Thuật toán là thói quen nền chạy song song mỗi ngày." },
  { icon: "🧠", text: "Active recall: gập tài liệu lại, tự nói lại khái niệm trước khi mở ra kiểm tra." },
  { icon: "🗣️", text: "Dạy lại cho người khác (hoặc nói to cho chính mình) là cách học sâu nhất." },
  { icon: "🍅", text: "Pomodoro: 25' tập trung / 5' nghỉ. Não cần khoảng nghỉ để ghi nhớ." },
  { icon: "🈶", text: "Quanh 6/12 cứ đi chậm để thi JLPT N5 — deload đã tính sẵn, đừng thấy tội lỗi." },
  { icon: "🚀", text: "Đọc không làm middle được — build mới làm middle. Ưu tiên bắt tay vào làm." },
  { icon: "⚙️", text: "Ôn Coroutine & Flow thật kỹ ngay Phase 0 — nó là xương sống của cả DB lẫn Network." },
  { icon: "🐛", text: "Gặp bug lạ đừng Google vội — thử đoán nguyên nhân trước, đúng hay sai đều học được nhiều hơn." },
  { icon: "📉", text: "Không cần cày nhiều bài. Hiểu sâu 1 pattern hơn làm hời hợt 10 bài." },
];

/* Xuất ra global cho app.js dùng */
window.ROADMAP = { META, PHASES, PILLARS, REVISE, CAPSTONE, MILESTONES, WORKBOOK, STUDY_TIPS };
