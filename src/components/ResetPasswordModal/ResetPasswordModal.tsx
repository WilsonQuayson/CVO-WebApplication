interface ResetPasswordModalProps{
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

const ResetPasswordModal = ({ isOpen, onClose, onConfirm } : ResetPasswordModalProps) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-lg font-bold">Reset Wachtwoord</h2>
          <p>Ben je zeker dat je het wachtwoord wilt resetten?</p>
          <div className="flex justify-end space-x-4 mt-4">
            <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400" onClick={onClose}>
              Cancel
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700" onClick={onConfirm}>
              Reset Password
            </button>
          </div>
        </div>
      </div>
    );
  };
  
export default ResetPasswordModal;