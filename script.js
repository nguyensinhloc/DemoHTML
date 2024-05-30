function handleRequest(requestType) {
    let content = document.getElementById('content');
    content.innerHTML = '';

    switch (requestType) {
        case 'repository':
            handleRepository();
            break;
        case 'version':
            handleVersion();
            break;
        case 'branch':
            handleBranch();
            break;
        case 'merge':
            handleMerge();
            break;
        case 'user':
            handleUser();
            break;
        default:
            content.innerHTML = '<p>Yêu cầu không hợp lệ!</p>';
    }
}

function handleRepository() {
    let content = document.getElementById('content');
    content.innerHTML = `
        <h2>Quản lý kho lưu trữ</h2>
        <button onclick="createRepository()">Tạo kho lưu trữ mới</button>
        <button onclick="syncRepository()">Sao chép/Đồng bộ dữ liệu</button>
        <div id="repositoryContent"></div>
    `;
}

function createRepository() {
    document.getElementById('repositoryContent').innerHTML = '<p>Kho lưu trữ mới đã được tạo!</p>';
}

function syncRepository() {
    document.getElementById('repositoryContent').innerHTML = '<p>Kho lưu trữ đã được sao chép/đồng bộ!</p>';
}

function handleVersion() {
    let content = document.getElementById('content');
    content.innerHTML = `
        <h2>Quản lý phiên bản</h2>
        <button onclick="createVersion()">Tạo phiên bản mới</button>
        <button onclick="switchVersion()">Chuyển đổi phiên bản</button>
        <button onclick="trackChanges()">Theo dõi thay đổi</button>
        <div id="versionContent"></div>
    `;
}

function createVersion() {
    document.getElementById('versionContent').innerHTML = '<p>Phiên bản mới đã được tạo!</p>';
}

function switchVersion() {
    document.getElementById('versionContent').innerHTML = '<p>Đã chuyển đổi phiên bản!</p>';
}

function trackChanges() {
    document.getElementById('versionContent').innerHTML = '<p>Đang theo dõi thay đổi!</p>';
}

function handleBranch() {
    let content = document.getElementById('content');
    content.innerHTML = `
        <h2>Quản lý nhánh</h2>
        <button onclick="createBranch()">Tạo nhánh mới</button>
        <button onclick="deleteBranch()">Xóa nhánh</button>
        <button onclick="switchBranch()">Chuyển đổi nhánh</button>
        <div id="branchContent"></div>
    `;
}

function createBranch() {
    document.getElementById('branchContent').innerHTML = '<p>Nhánh mới đã được tạo!</p>';
}

function deleteBranch() {
    document.getElementById('branchContent').innerHTML = '<p>Nhánh đã được xóa!</p>';
}

function switchBranch() {
    document.getElementById('branchContent').innerHTML = '<p>Đã chuyển đổi nhánh!</p>';
}

function handleMerge() {
    let content = document.getElementById('content');
    content.innerHTML = `
        <h2>Quản lý hợp nhất</h2>
        <button onclick="mergeBranch()">Hợp nhất nhánh</button>
        <button onclick="resolveConflict()">Giải quyết xung đột</button>
        <div id="mergeContent"></div>
    `;
}

function mergeBranch() {
    document.getElementById('mergeContent').innerHTML = '<p>Nhánh đã được hợp nhất!</p>';
}

function resolveConflict() {
    document.getElementById('mergeContent').innerHTML = '<p>Xung đột đã được giải quyết!</p>';
}

function handleUser() {
    let content = document.getElementById('content');
    content.innerHTML = `
        <h2>Quản lý người dùng</h2>
        <button onclick="manageUserInfo()">Quản lý thông tin người dùng</button>
        <button onclick="manageUserAccess()">Quản lý quyền truy cập</button>
        <button onclick="trackUserActivity()">Theo dõi hoạt động người dùng</button>
        <div id="userContent"></div>
    `;
}

function manageUserInfo() {
    document.getElementById('userContent').innerHTML = '<p>Thông tin người dùng đã được quản lý!</p>';
}

function manageUserAccess() {
    document.getElementById('userContent').innerHTML = '<p>Quyền truy cập đã được quản lý!</p>';
}

function trackUserActivity() {
    document.getElementById('userContent').innerHTML = '<p>Đang theo dõi hoạt động người dùng!</p>';
}
